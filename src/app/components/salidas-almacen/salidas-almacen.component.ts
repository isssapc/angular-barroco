import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-salidas-almacen',
  templateUrl: './salidas-almacen.component.html',
  styleUrls: ['./salidas-almacen.component.scss']
})
export class SalidasAlmacenComponent implements OnInit {

  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editarsalida() {
    this.router.navigate(["/editar-salida-almacen"]);
  }

}
