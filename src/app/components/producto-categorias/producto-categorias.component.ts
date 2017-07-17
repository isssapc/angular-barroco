import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";

@Component({
  selector: 'app-producto-categorias',
  templateUrl: './producto-categorias.component.html',
  styleUrls: ['./producto-categorias.component.scss']
})
export class ProductoCategoriasComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  agregarcategoria() {
    this.dialog.open(AgregarCategoriaDialogoComponent);
  }



}
