import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material'; 
import { EditarClienteDialogoComponent } from "app/components/editar-cliente-dialogo/editar-cliente-dialogo.component";
import { Cliente } from "app/model/cliente";
import { ClienteService } from "app/services/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteSrv: ClienteService, public dialog: MdDialog) { }

  ngOnInit() { 
    this.clienteSrv.getClientes()
    .subscribe(res=> this.clientes = res);
  }

  
  editarclientedialogo() {
    this.dialog.open(EditarClienteDialogoComponent);
  }

}
