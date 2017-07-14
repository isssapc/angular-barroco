import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarSalidaAlmacenDialogoComponent } from "app/components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component";

@Component({
  selector: 'app-salida-almacen',
  templateUrl: './salida-almacen.component.html',
  styleUrls: ['./salida-almacen.component.scss']
})
export class SalidaAlmacenComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  editarsalida(){
    this.dialog.open(EditarSalidaAlmacenDialogoComponent);
  }

}
