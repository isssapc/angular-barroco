import { Component, OnInit, Inject} from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";
import { Producto } from "app/model/producto";
import { Categoria } from "app/model/categoria";

@Component({
  selector: 'app-editar-producto-dialogo',
  templateUrl: './editar-producto-dialogo.component.html',
  styleUrls: ['./editar-producto-dialogo.component.scss']
})
export class EditarProductoDialogoComponent implements OnInit {

  producto:Producto;
  categorias:Categoria[];

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<EditarProductoDialogoComponent>
  ) { }

  ngOnInit() {
    this.producto= this.data.producto;
    this.categorias= this.data.categorias;
  }

}
