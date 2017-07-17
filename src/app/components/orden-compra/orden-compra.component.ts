import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";


@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.scss']
})
export class OrdenCompraComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

   editarorden() {
    this.dialog.open(EditarOrdenPedidoDialogoComponent);
  }

}
