import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Producto } from "app/model/producto";
import { ProductoService } from "app/services/producto.service";
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { Categoria } from "app/model/categoria";
import { EntradaService } from "app/services/entrada.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Entrada } from "app/model/entrada";

@Component({
  selector: 'app-editar-entrada-almacen',
  templateUrl: './editar-entrada-almacen.component.html',
  styleUrls: ['./editar-entrada-almacen.component.scss']
})
export class EditarEntradaAlmacenComponent implements OnInit {
  loading: boolean;
  productos: Producto[];
  entrada: Entrada= new Entrada();

  constructor(
    private route: ActivatedRoute,
    private entradaSrv: EntradaService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;


    this.route.paramMap.switchMap((params: ParamMap) =>
      this.entradaSrv.getEntrada(params.get('id')))
      .subscribe(res => {

        this.loading = false;


        this.productos = res.productos;
        this.entrada = res.entrada;

       

      });



  }



}
