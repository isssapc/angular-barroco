import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material'; 
import { EditarClienteDialogoComponent } from "app/components/editar-cliente-dialogo/editar-cliente-dialogo.component";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  
  editarclientedialogo() {
    this.dialog.open(EditarClienteDialogoComponent);
  }

}
