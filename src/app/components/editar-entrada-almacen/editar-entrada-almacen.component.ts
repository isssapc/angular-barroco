import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";

@Component({
  selector: 'app-editar-entrada-almacen',
  templateUrl: './editar-entrada-almacen.component.html',
  styleUrls: ['./editar-entrada-almacen.component.scss']
})
export class EditarEntradaAlmacenComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  categorias: Categoria[];

  constructor(private productoCategoriaSrv: ProductoCategoriaService, private productoSrv: ProductoService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;

    this.productoCategoriaSrv.getProductoCategorias()
      .subscribe(res => this.categorias = res);

    this.productoSrv.getAlmacenEntrada()
      .subscribe(res => {
        this.productos = res;
        this.loading = false;
      });

  }

  addEntradaAlmacen() {
    let entrada = this.productos.filter(item => item.cantidad && item.num_factura);
    console.log("productos entrada", entrada);
  }

}
