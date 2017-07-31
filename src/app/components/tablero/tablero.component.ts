import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoEntradas() {
    this.router.navigate(["/entradas-almacen"]);
  }

  gotoSalidas() {
    this.router.navigate(["/salidas-almacen"]);
  }

  gotoOrdenes() {
    this.router.navigate(["/ordenes"]);
  }

  gotoReportes() {
    this.router.navigate(["/reportes"]);
  }

  gotoInventario() {
    this.router.navigate(["/inventario"]);
  }

    gotoOrden() {
    this.router.navigate(["/orden-compra"]);
  }

   gotoClientes() {
    this.router.navigate(["/clientes"]);
  }


}
