import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { EditarUsuarioDialogoComponent } from "app/components/editar-usuario-dialog/editar-usuario-dialogo.component";
import { Usuario } from "app/model/usuario";
import { UsuarioService } from "app/services/usuario.service";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  loading: boolean;
  usuarios: Usuario[];

  constructor(private usuarioSrv: UsuarioService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;
    this.usuarioSrv.getUsuarios()
      .subscribe(res => {
        this.usuarios = res;
        this.loading = false;
      });
  }

  editarUsuario(usuario: Usuario) {

    let copia = Usuario.copiar(usuario);

    let dialogRef = this.dialog.open(EditarUsuarioDialogoComponent, {
      data: { usuario: copia }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading=true;

        this.usuarioSrv.updateUsuario(usuario.id_usuario, copia)
          .subscribe(res => {

            let i = this.usuarios.indexOf(usuario);
            this.usuarios[i] = res;
            this.loading=false;
            this.snackBar.open("Usuario Actualizado", "Cerrar", {
              duration: 2000
            });

          });


      }

    });


  }

}
