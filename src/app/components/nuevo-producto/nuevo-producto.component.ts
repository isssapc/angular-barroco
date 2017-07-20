import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from "app/services/producto.service";
import { NgForm } from "@angular/forms";
import { Producto } from "app/model/producto";
import { Categoria } from "app/model/categoria";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";



@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {
  @ViewChild('formCreateProducto') formCreateProducto: NgForm;

    producto: Producto = new Producto();
    categorias: Categoria [];

  constructor(private productoCategoriaSrv: ProductoCategoriaService, private productoSrv: ProductoService) { }


  ngOnInit() {
    this.productoCategoriaSrv.getProductoCategorias()
    .subscribe(res=> this.categorias = res);
  }

  createProducto() {
    console.log("createUsuario");

    this.productoSrv.createProducto(this.producto)
      .subscribe(res => {
        console.log("response", res);
        
        this.producto= new Producto();
        this.formCreateProducto.reset();
      });
  }

}
