import { Component, OnInit } from '@angular/core';
import { Orden } from "app/model/orden";
import { OrdenService } from "app/services/orden.service";

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  loading: boolean;
  ordenes: Orden[];

  constructor(private ordenSrv: OrdenService) { }

  ngOnInit() {
    this.loading = true;
    this.ordenSrv.getOrdenes()
      .subscribe(res => {
        this.ordenes = res;
        this.loading = false;
      });
  }

  delOrden(orden: Orden) {
    //console.log("delOrden", orden.id_orden_compra);
    this.ordenSrv.delOrden(orden.id_orden_compra)
      .subscribe(res => {
        if (res.count === 1) {

          let i = this.ordenes.indexOf(orden);
          this.ordenes.splice(i, 1);

        } else {
          //todo
        }
      });
  }

  editarOrden(orden: Orden) {
    console.log("editarOrden", orden.id_orden_compra);
  }

}
