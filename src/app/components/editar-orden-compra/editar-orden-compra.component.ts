import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { NgForm } from "@angular/forms";
import { OrdenService } from "app/services/orden.service";
import { Orden } from "app/model/orden";
import { ClienteService } from "app/services/cliente.service";
import { Cliente } from "app/model/cliente";
import { NgbTypeaheadSelectItemEvent, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateISOParserFormatter } from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter";



@Component({
  selector: 'app-editar-orden-compra',
  templateUrl: './editar-orden-compra.component.html',
  styleUrls: ['./editar-orden-compra.component.scss']
})
export class EditarOrdenCompraComponent implements OnInit {
  @ViewChild('formCreateOrden') formCreateOrden: NgForm;
  //@ViewChild('dirEnvio') dirEnvio:ElementRef;
  //@ViewChild('dirFiscal') dirFiscal:ElementRef;
  @ViewChild('inputCantidad') inputCantidad: any;

  orden: Orden = new Orden();
  searching = false;
  searchFailed = false;
  producto: Producto = new Producto();
  cliente: Cliente = new Cliente();
  taCliente: Cliente;
  formas_pago: any[];
  lugares_entrega: any[];

  productos_orden: any[] = [];
  fecha_entrega: NgbDateStruct;

  dateParser: NgbDateISOParserFormatter = new NgbDateISOParserFormatter();

  constructor(
    private productoSrv: ProductoService,
    private clienteSrv: ClienteService,
    public dialog: MdDialog,

    private ordenSrv: OrdenService) { }

  ngOnInit() {
    this.ordenSrv.getFormasPago()
      .subscribe(res => this.formas_pago = res);

    this.ordenSrv.getLugaresEntrega()
      .subscribe(res => this.lugares_entrega = res);
  }

  searchProducto = (text$: Observable<string>) =>
    _do.call(
      switchMap.call(
        _do.call(distinctUntilChanged.call(debounceTime.call(text$, 300)),
          () => this.searching = true),
        term =>

          _catch.call(
            _do.call(this.productoSrv.searchProductoOrden(term), () => { this.searchFailed = false; console.log("complete1"); }, () => { console.log("hola"); this.searching = false; }),
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

  formatterProducto = (producto: Producto) => producto.nombre;

  searchCliente = (text$: Observable<string>) =>
    _do.call(
      switchMap.call(
        _do.call(distinctUntilChanged.call(debounceTime.call(text$, 300)),
          () => this.searching = true),
        term =>

          _catch.call(
            _do.call(this.clienteSrv.searchCliente(term), () => { this.searchFailed = false; console.log("complete1"); }),
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

  formatterCliente = (cliente: Cliente) => cliente.nombre;




  selectClienteOrden(event: NgbTypeaheadSelectItemEvent, typeahead, textDirFiscal, textDirEnvio, inputCliente) {
    console.log("selectItem", event.item);
    event.preventDefault();
    typeahead.value = "";



    this.orden.id_cliente = event.item.id_cliente;

    //this.dirFiscal.nativeElement.value = Cliente.getDireccionFiscal(event.item);
    //this.dirEnvio.nativeElement.value = Cliente.getDireccionEnvio(event.item);


    inputCliente.value = "(" + event.item.id_cliente + ") " + event.item.nombre;
    textDirFiscal.value = Cliente.getDireccionFiscal(event.item);
    textDirEnvio.value = Cliente.getDireccionEnvio(event.item);


  }

  selectProductoOrden(event: NgbTypeaheadSelectItemEvent, inputCantidad) {
    console.log("selectItem", event.item);
    //event.preventDefault();
    //typeahead.value = "";

    inputCantidad.focus();


  }

  onDateChange(date: NgbDateStruct) {
    this.orden.fecha_entrega = this.dateParser.format(date);
  }


  agregarProducto() {
    console.log("agregar producto");
    let producto = {
      id_producto: this.producto.id_producto,
      nombre: this.producto.nombre,
      unidad: this.producto.unidad,
      cantidad: this.producto.cantidad,
      precio_venta: this.producto.precio_venta
    }
    this.productos_orden.unshift(producto);
    this.producto = new Producto();
  }

  delProducto(producto) {
    let i = this.productos_orden.indexOf(producto);
    this.productos_orden.splice(i, 1);
  }

  createOrden() {
    console.log("createOrden");

    //this.orden.id_cliente=this.cliente.id_cliente;

    this.ordenSrv.createOrden(this.orden, this.productos_orden)
      .subscribe(res => {
        console.log("response", res);

        this.orden = new Orden();
        this.productos_orden = [];
        this.formCreateOrden.reset();
      });
  }


}



