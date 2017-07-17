import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarEntradaDialogoComponent } from "app/components/editar-entrada-dialogo/editar-entrada-dialogo.component";

@Component({
  selector: 'app-entradas-almacen',
  templateUrl: './entradas-almacen.component.html',
  styleUrls: ['./entradas-almacen.component.scss']
})
export class EntradasAlmacenComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

    editarentradadialogo() {
    this.dialog.open(EditarEntradaDialogoComponent);
  }


}
