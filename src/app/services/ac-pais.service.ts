import { Agilis } from '@agilis/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GEO } from '../models/geo';
import { LocalConnectionService } from './agilis/connection.service';

const urlCommon = environment.UrlRest;

@Injectable({
  providedIn: 'root'
})
export class ACPaisService {

  //private connectionService: ConnectionService,, private connectionService: LocalConnectionService 
  constructor(private http: HttpClient) { }

  get(p: GEO.PaisParams) {

    //return this.connectionService.post<GEO.Pais[]>({ controller: 'Pais', url: urlCommon } as Agilis.UrlCompose, 'GetByCustom', p.toString());

    return this.http
      .post<GEO.Pais[]>(urlCommon + 'Pais', new Agilis.WebClientParams('GetByCustom', p.toString()));
    //.pipe(catchError(this.handleError(silentError)));
  }

  set(p: GEO.Pais, op: Agilis.Operacion) {
    return this.http
      .post<GEO.Pais>(urlCommon + 'Pais', new Agilis.WebClientParams(
        op === Agilis.Operacion.ADD ? 'ADD' : op === Agilis.Operacion.UPDATE ? 'UPDATE' : 'DELETE', p.toString()));
  }
}
