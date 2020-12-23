import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Agilis, UiNotificationHelper } from '@agilis/common';


@Injectable()
export class LocalConnectionService {
	constructor(private http: HttpClient, private uihelper: UiNotificationHelper) { }

	/**
	 * Encapsula la contruccion de un metodo POST
	 * @param urlCompose Es un compuesto de la url y el controller
	 * @param method metodo del controller a llamar
	 * @param params parametros enviados en el body
	 * @param withToken `boolean` para agregar el token de conexion (default true)
	 * @param silentError `boolean` para mostrar errores o no (default false)
	 *
	 * @returns un `Observable` para la clase declarada
	 *
	 * */
	post<T>(
		controllerOrUrl: Agilis.UrlCompose, //string |
		method: string,
		params: string,
		withToken: boolean = true,
		silentError: boolean = false
	): Observable<T> {
		return this.http
			.post<T>(this.parseUrl(controllerOrUrl), new Agilis.WebClientParams(method, params), {
				params: {
					withToken: String(withToken)
				}
			})
			.pipe(catchError(this.handleError(silentError)));
	}

	/**
	 * Encapsula la contruccion de un metodo GET
	 * @param urlCompose Es un compuesto de la url y el controller
	 * @param params parametros enviados en el body
	 * @param withToken `boolean` para agregar el token de conexion (default true)
	 *
	 *  @returns un `Observable` para la clase declarada
	 *
	 */
	get<T>(
		controllerOrUrl: Agilis.UrlCompose, //string |
		params: string = '',
		withToken: boolean = true,
		silentError: boolean = false
	): Observable<T> {
		const p = params != '' ? '/' + params : params;
		return this.http
			.get<T>(this.parseUrl(controllerOrUrl) + p, {
				params: {
					withToken: String(withToken)
				}
			})
			.pipe(catchError(this.handleError(silentError)));
	}

	/**
	 * Retorna la url compuesta
	 *
	 * @param controllerOrUrl 'string' | 'UrlCompose' con los datos de la url
	 *
	 */
	parseUrl(controllerOrUrl: Agilis.UrlCompose) {
		const basicUrl = controllerOrUrl.url;
		let componseUrl = (basicUrl[basicUrl.length - 1] === '/' ? basicUrl : basicUrl + '/') + controllerOrUrl.controller;
		if (controllerOrUrl.queryParams) {
			componseUrl += '?' + controllerOrUrl.queryParams.join('&');
		}
		return componseUrl;
	}

	/*
	 * Funcion para manejo de errores
	 */
	handleError(silentError: boolean) {
		return (err: HttpErrorResponse) => {
			if ((err.error as Agilis.Error).SpMessage != null) {
				const aerror: Agilis.Error = err.error;
				if (!silentError) this.uihelper.alertBasic('Atención', aerror.ErrorCode, aerror.SpMessage);
				// console.log('Atención ' + aerror.ErrorCode, aerror.SpMessage); //TODO: Falta alert
				return throwError(err);
			}

			if (err.status === 0) {
				// SIN RED
				if (!silentError)
					this.uihelper.alertBasic('Ups.. no hay internet', '', 'No pudimos encontrar una red disponible.');
				// console.log('Ups.. no hay internet', 'No pudimos encontrar una red disponible.');

				return throwError(err);
			}
			if (!silentError) this.uihelper.alertBasic('Error de Servidor', err.statusText, err.message);
			// console.log('Error de Servidor  ' + err.statusText, err.message); //TODO: Falta alert
			return throwError(err);
		};
	}
}
