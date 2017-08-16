import { Component, OnInit } from '@angular/core';
import { EditarEntradaDialogoComponent } from "app/components/editar-entrada-dialogo/editar-entrada-dialogo.component";
import { Router } from "@angular/router";



import { MdSnackBar } from '@angular/material';
import { EntradaService } from "app/services/entrada.service";
import { Entrada } from "app/model/entrada";


@Component({
  selector: 'app-entradas-almacen',
  templateUrl: './entradas-almacen.component.html',
  styleUrls: ['./entradas-almacen.component.scss']
})
export class EntradasAlmacenComponent implements OnInit {
  loading: boolean;
  entradas: Entrada[];


  constructor(
    private entradaSrv: EntradaService,
    public router: Router,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;

    this.entradaSrv.getEntradas()
      .subscribe(res => {

        this.loading = false;

        this.entradas = res;

      });


  }

  editarEntrada(entrada) {
    this.router.navigate(["/editar-entrada-almacen", entrada.id_entrada]);
  }


}
