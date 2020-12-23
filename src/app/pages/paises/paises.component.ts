import { Agilis, tableRow, UiNotificationHelper } from '@agilis/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { GEO } from 'src/app/models/geo';
import { ACPaisService } from 'src/app/services/ac-pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  modalSearchRef: BsModalRef;
  modalDataRef: BsModalRef;
  loading: boolean = false;

  tablerows: tableRow[] = [
    new tableRow(6, "Nombre", "Nombre", true),
    new tableRow(3, "A2", "A2", true),
    new tableRow(3, "A3", "A3", true),
  ];
  data: GEO.Pais[] = [];

  searchNombre: string = '';
  itemSelected: GEO.Pais;

  constructor(private modalService: BsModalService,
    private uihelper: UiNotificationHelper,
    private paisService: ACPaisService) { }

  ngOnInit(): void {
  }

  searchShow(formSearchRef: TemplateRef<any>) {
    try {
      this.modalSearchRef = this.modalService.show(formSearchRef);
    } catch (error) {
      this.uihelper.toastCustom(error);
    }
  }
  searchClose() {
    if (this.modalSearchRef) this.modalSearchRef.hide();
  }
  dataShow(formDataRef: TemplateRef<any>) {
    try {
      this.itemSelected = new GEO.Pais();
      this.modalDataRef = this.modalService.show(formDataRef, { ignoreBackdropClick: true });
    } catch (error) {
      this.uihelper.toastCustom(error);
    }
  }
  dataClose() {
    if (this.modalDataRef) this.modalDataRef.hide();
  }

  get() {
    this.searchClose();
    this.loading = true;
    this.paisService
      .get(new GEO.PaisParams(''))
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        data => this.data = data
      );

    // this.data = [
    //   { PaisID: 1, Nombre: 'Prueba 1', A2: 'P1', A3: 'PR1' },
    //   { PaisID: 2, Nombre: 'Prueba 2', A2: 'P2', A3: 'PR2' },
    //   { PaisID: 3, Nombre: 'Prueba 3', A2: 'P3', A3: 'PR3' },
    //   { PaisID: 4, Nombre: 'Prueba 4', A2: 'P4', A3: 'PR4' },
    //   { PaisID: 5, Nombre: 'Prueba 5', A2: 'P5', A3: 'PR5' },
    //   { PaisID: 6, Nombre: 'Prueba 6', A2: 'P6', A3: 'PR6' },
    //   { PaisID: 7, Nombre: 'Prueba 7', A2: 'P7', A3: 'PR7' },
    //   { PaisID: 8, Nombre: 'Prueba 8', A2: 'P8', A3: 'PR8' },
    // ];
  }

  set() {
    this.dataClose();
    //this.data = [...this.data, this.itemSelected];
    this.loading = true;
    this.paisService
      .set(this.itemSelected, Agilis.Operacion.ADD)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        () => this.get()
      );
  }

}
