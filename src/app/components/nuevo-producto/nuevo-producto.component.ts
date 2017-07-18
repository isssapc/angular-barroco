import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from "app/services/producto.service";
import { NgForm } from "@angular/forms";
import { Producto } from "app/model/producto";
import { Categoria } from "app/model/categoria";



@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {
  @ViewChild('formCreateProducto') formCreateProducto: NgForm;

    producto: Producto = new Producto();
    categorias: Categoria [];

  constructor(private productoSrv: ProductoService) { }


  ngOnInit() {
    this.productoSrv.getProductoCategorias()
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
