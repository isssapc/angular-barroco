import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";
import { ProductoService } from "app/services/producto.service";
import { Observable } from "rxjs/Observable";
import { _do } from "rxjs/operator/do";
import { switchMap } from "rxjs/operator/switchMap";
import { debounceTime } from "rxjs/operator/debounceTime";
import { of } from "rxjs/observable/of";
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';
import { _catch } from 'rxjs/operator/catch';
import { Producto } from "app/model/producto";



@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.scss']
})
export class OrdenCompraComponent implements OnInit {

  searching = false;
  searchFailed = false;
  model: any;

  constructor(private productoSrv: ProductoService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  editarorden() {
    this.dialog.open(EditarOrdenPedidoDialogoComponent);
  }


  search = (text$: Observable<string>) =>
    _do.call(
      switchMap.call(
        _do.call(distinctUntilChanged.call(debounceTime.call(text$, 300)),
          () => this.searching = true),
        term =>
     
          _catch.call(
            _do.call(this.productoSrv.searchProducto(term), () => { this.searchFailed = false; console.log("complete1"); }, () => { console.log("hola"); this.searching = false; }),
            () => {
              console.log("error");
              this.searchFailed = true;
              return of.call([]);
            }
          )
         
      ),
      () => {
        console.log("complete2");
        this.searching = false;        
      }
    );

  formatter = (producto: Producto) => producto.nombre;

}
