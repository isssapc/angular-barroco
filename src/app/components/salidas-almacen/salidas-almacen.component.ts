import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SalidaService } from "app/services/salida.service";
import { Salida } from "app/model/salida";

@Component({
  selector: 'app-salidas-almacen',
  templateUrl: './salidas-almacen.component.html',
  styleUrls: ['./salidas-almacen.component.scss']
})
export class SalidasAlmacenComponent implements OnInit {

  loading: boolean = false;

  salidas: Salida[];

  constructor(
    private router: Router,
    private salidaSrv: SalidaService
  ) { }

  ngOnInit() {

    this.loading = true;

    this.salidaSrv.getSalidas()
      .subscribe(res => {

        this.loading = false;

        this.salidas = res;
      });

  }

  editSalida(salida) {
    this.router.navigate(["/editar-salida-almacen"]);
  }

  delSalida(salida) {
    console.log("delSalida", salida);
  }

}
