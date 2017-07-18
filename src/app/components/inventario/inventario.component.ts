import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarInventarioDialogoComponent } from "app/components/editar-inventario-dialogo/editar-inventario-dialogo.component";
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  productos: Producto[];

  constructor(private productoSrv: ProductoService, public dialog: MdDialog) { }

  ngOnInit() {
    this.productoSrv.getProductos()
    .subscribe(res=> this.productos = res);
  }
 
  editarinventario() {
    this.dialog.open(EditarInventarioDialogoComponent);
  }

}
