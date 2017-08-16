import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { EditarSalidaAlmacenDialogoComponent } from "app/components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component";
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";

@Component({
  selector: 'app-salida-almacen',
  templateUrl: './salida-almacen.component.html',
  styleUrls: ['./salida-almacen.component.scss']
})
export class SalidaAlmacenComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  more: boolean[] = [];

  constructor(
    private productoSrv: ProductoService,
    public dialog: MdDialog, public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.loading = true;
    this.productoSrv.getProductos()
      .subscribe(res => {
        this.loading = false;

        this.productos = res;

      });
  }

  editarsalida() {
    this.dialog.open(EditarSalidaAlmacenDialogoComponent);
  }

}
