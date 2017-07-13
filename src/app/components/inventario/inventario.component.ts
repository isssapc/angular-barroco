import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarInventarioDialogoComponent } from "app/components/editar-inventario-dialogo/editar-inventario-dialogo.component";



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  editarinventario() {
    this.dialog.open(EditarInventarioDialogoComponent);
  }

}
