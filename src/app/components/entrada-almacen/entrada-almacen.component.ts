import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";
import { EntradaService } from "app/services/entrada.service";

@Component({
  selector: 'app-entrada-almacen',
  templateUrl: './entrada-almacen.component.html',
  styleUrls: ['./entrada-almacen.component.scss']
})
export class EntradaAlmacenComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  categorias: Categoria[];
  num_factura: string;

  constructor(
    private productoCategoriaSrv: ProductoCategoriaService,
    private productoSrv: ProductoService,
    private entradaSrv: EntradaService,
    public dialog: MdDialog, public snackBar: MdSnackBar) { }

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
    let entrada = this.productos.filter(item => item.cantidad > 0);
    let productos = entrada.map(item => {
      return { id_producto: item.id_producto, cantidad: item.cantidad }
    });

    this.loading = true;

    this.entradaSrv.createEntrada(this.num_factura, productos)
      .subscribe(res => {
        this.loading = false;

        this.num_factura = null;
        this.productos.forEach(item => {
          item.cantidad = null;
        });

      });

    console.log("num_factura", this.num_factura);
    console.log("productos entrada", productos);
  }

}
