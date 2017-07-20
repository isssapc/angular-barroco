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

}
