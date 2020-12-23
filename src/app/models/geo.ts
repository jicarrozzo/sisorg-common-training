/**
 * Clases e interfases relacionadas a GEO
 */
export namespace GEO {

	/** Datos para la busqueda de Paises */
	export class PaisParams {
		public PaisIDs: number[];
		constructor(public Nombre: string) { }
		toString() {
			return JSON.stringify(this);
		}
	}

	/**
 * PaisDTO
 */
	export class Pais {
		PaisID: number;
		Nombre: string;
		A2: string;
		A3: string;
		constructor() { }
		toString() {
			return JSON.stringify(this);
		}
	}

}
