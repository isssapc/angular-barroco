import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { EditarUsuarioDialogComponent } from "app/components/editar-usuario-dialog/editar-usuario-dialog.component";
import { Usuario } from "app/model/usuario";
import { UsuarioService } from "app/services/usuario.service";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioSrv: UsuarioService, public dialog: MdDialog) { }

  ngOnInit() {
    this.usuarioSrv.getUsuarios()
      .subscribe(res => this.usuarios = res);
  }

  abrirdialogo() {
    this.dialog.open(EditarUsuarioDialogComponent);
  }

}
