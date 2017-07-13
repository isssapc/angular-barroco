import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { EditarUsuarioDialogComponent } from "app/components/editar-usuario-dialog/editar-usuario-dialog.component";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  abrirdialogo() {
    this.dialog.open(EditarUsuarioDialogComponent);
  }

}
