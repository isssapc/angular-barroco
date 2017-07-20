import { Component, OnInit, Inject } from '@angular/core';
import { Categoria } from "app/model/categoria";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-agregar-categoria-dialogo',
  templateUrl: './agregar-categoria-dialogo.component.html',
  styleUrls: ['./agregar-categoria-dialogo.component.scss']
})
export class AgregarCategoriaDialogoComponent implements OnInit {

  categoria: Categoria;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<AgregarCategoriaDialogoComponent>
  ) { }

  ngOnInit() {
    this.categoria= this.data.categoria;
  }

}
