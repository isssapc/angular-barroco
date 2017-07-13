import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";


@Component({
  selector: 'app-orden-pedido',
  templateUrl: './orden-pedido.component.html',
  styleUrls: ['./orden-pedido.component.scss']
})
export class OrdenPedidoComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

   editarorden() {
    this.dialog.open(EditarOrdenPedidoDialogoComponent);
  }

}
