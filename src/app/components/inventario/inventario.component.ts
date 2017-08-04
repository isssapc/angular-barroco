import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";
import { EditarProductoDialogoComponent } from "app/components/editar-producto-dialogo/editar-producto-dialogo.component";
import { AgregarFichaTecnicaDialogoComponent } from "app/components/agregar-ficha-tecnica-dialogo/agregar-ficha-tecnica-dialogo.component";



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  categorias: Categoria[];
  more: boolean[] = [];

  constructor(
    private productoCategoriaSrv: ProductoCategoriaService, 
    private productoSrv: ProductoService, 
    public dialog: MdDialog, public snackBar: MdSnackBar
  ) { }

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

  agregarFicha() {
    this.dialog.open(AgregarFichaTecnicaDialogoComponent);
  }



  editarProducto(producto: Producto) {


    let copia = Producto.copiar(producto);

    let dialogRef = this.dialog.open(EditarProductoDialogoComponent, {
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
