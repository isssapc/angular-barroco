import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarSalidaAlmacenDialogoComponent } from "app/components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component";

@Component({
  selector: 'app-editar-salida-almacen',
  templateUrl: './editar-salida-almacen.component.html',
  styleUrls: ['./editar-salida-almacen.component.scss']
})
export class EditarSalidaAlmacenComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }


  editarsalida() {
    this.dialog.open(EditarSalidaAlmacenDialogoComponent);
  }


}
