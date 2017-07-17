import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";
import { ProductoService } from "app/services/producto.service";

@Component({
  selector: 'app-producto-categorias',
  templateUrl: './producto-categorias.component.html',
  styleUrls: ['./producto-categorias.component.scss']
})
export class ProductoCategoriasComponent implements OnInit {
  categorias;

  constructor(private productoSrv:ProductoService ,public dialog: MdDialog) { }

  ngOnInit() {
     this.productoSrv.getProductoCategorias()
      .subscribe(res => this.categorias = res);

  }

  agregarcategoria() {
    this.dialog.open(AgregarCategoriaDialogoComponent);
  }



}
