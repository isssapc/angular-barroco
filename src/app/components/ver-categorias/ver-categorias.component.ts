import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";

@Component({
  selector: 'app-ver-categorias',
  templateUrl: './ver-categorias.component.html',
  styleUrls: ['./ver-categorias.component.scss']
})
export class VerCategoriasComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  agregarcategoria() {
    this.dialog.open(AgregarCategoriaDialogoComponent);
  }



}
