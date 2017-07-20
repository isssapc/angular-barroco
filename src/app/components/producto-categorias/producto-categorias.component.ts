import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";
import { Categoria } from "app/model/categoria";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";

@Component({
  selector: 'app-producto-categorias',
  templateUrl: './producto-categorias.component.html',
  styleUrls: ['./producto-categorias.component.scss']
})
export class ProductoCategoriasComponent implements OnInit {
  categorias: Categoria[];
  loading: boolean;


  constructor(private categoriaSrv: ProductoCategoriaService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.categoriaSrv.getProductoCategorias()
      .subscribe(res => this.categorias = res);


  }

  agregarCategoria() {
    let categoria = new Categoria();

    let dialogRef = this.dialog.open(AgregarCategoriaDialogoComponent, {
      data: { categoria: categoria }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading = true;

        this.categoriaSrv.createProductoCategoria(categoria)
          .subscribe(res => {

            this.categorias.push(res);

            this.loading = false;
            this.snackBar.open("Categoria Agregada", "Cerrar", {
              duration: 2000
            });

          });


      }

    });
  }


}
