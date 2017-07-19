import { Component, OnInit, Inject} from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";
import { Producto } from "app/model/producto";

@Component({
  selector: 'app-editar-inventario-dialogo',
  templateUrl: './editar-inventario-dialogo.component.html',
  styleUrls: ['./editar-inventario-dialogo.component.scss']
})
export class EditarInventarioDialogoComponent implements OnInit {

  producto:Producto 

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<EditarInventarioDialogoComponent>
  ) { }

  ngOnInit() {
    this.producto= this.data.producto;
  }

}
