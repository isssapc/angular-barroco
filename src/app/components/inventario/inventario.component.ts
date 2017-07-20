import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { EditarInventarioDialogoComponent } from "app/components/editar-inventario-dialogo/editar-inventario-dialogo.component";
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  categorias: Categoria[];

  constructor(private productoCategoriaSrv: ProductoCategoriaService, private productoSrv: ProductoService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

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



  editarProducto(producto: Producto) {


    let copia = Producto.copiar(producto);

    let dialogRef = this.dialog.open(EditarInventarioDialogoComponent, {
      data: { 
        producto: copia,
        categorias: this.categorias,
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading = true;

        this.productoSrv.updateProducto(producto.id_producto, copia)
          .subscribe(res => {

            let i = this.productos.indexOf(producto);
            this.productos[i] = res;
            this.loading = false;
            this.snackBar.open("Producto Actualizado", "Cerrar", {
              duration: 2000
            });

          });


      }

    });


  }

}
