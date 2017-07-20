import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";
import { ProductoService } from "app/services/producto.service";
import { Categoria } from "app/model/categoria";

@Component({
  selector: 'app-producto-categorias',
  templateUrl: './producto-categorias.component.html',
  styleUrls: ['./producto-categorias.component.scss']
})
export class ProductoCategoriasComponent implements OnInit {
  categorias: Categoria[];
  loading: boolean;


  constructor(private productoSrv: ProductoService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.productoSrv.getProductoCategorias()
      .subscribe(res => this.categorias = res);


  }

  agregarCategoria() {
    let copia = Categorias.copiar(categorias);

    let dialogRef = this.dialog.open(AgregarCategoriaDialogoComponent, {
      data: { cliente: copia }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading = true;

        this.categoriaSrv.updateCliente(cliente.id_cliente, copia)
          .subscribe(res => {

            let i = this.categoria.indexOf(categoria);
            this.categoria[i] = res;
            this.loading = false;
            this.snackBar.open("Categoria Actualizada", "Cerrar", {
              duration: 2000
            });

          });


      }

    });
  }


}
