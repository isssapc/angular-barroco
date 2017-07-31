import { Component, OnInit } from '@angular/core';
import { EditarEntradaDialogoComponent } from "app/components/editar-entrada-dialogo/editar-entrada-dialogo.component";
import { Router } from "@angular/router";
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-entradas-almacen',
  templateUrl: './entradas-almacen.component.html',
  styleUrls: ['./entradas-almacen.component.scss']
})
export class EntradasAlmacenComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  categorias: Categoria[];

  constructor(private productoCategoriaSrv: ProductoCategoriaService, private productoSrv: ProductoService, public router: Router, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;

    this.productoCategoriaSrv.getProductoCategorias()
      .subscribe(res => this.categorias = res);


    this.productoSrv.getProductos()
      .subscribe(res => {
        this.productos = res;
        this.loading = false;
      });
  }

  editarEntrada(productos) {
    this.router.navigate(["/editar-entrada-almacen",productos.id_producto]);
  }


}
