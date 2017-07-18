import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from "app/services/cliente.service";
import { Cliente } from "app/model/cliente";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
@ViewChild('formCreateCliente') formCreateCliente: NgForm;

  cliente: Cliente = new Cliente();

  constructor(private clienteSrv: ClienteService) { }

  ngOnInit() {
  }

  createCliente() {
    console.log("createUsuario");

    this.clienteSrv.createCliente(this.cliente)
      .subscribe(res => {
        console.log("response", res);
        
        this.cliente= new Cliente();
        this.formCreateCliente.reset();
      });
  }

} 
