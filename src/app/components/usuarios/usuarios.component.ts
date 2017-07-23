import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { EditarUsuarioDialogoComponent } from "app/components/editar-usuario-dialog/editar-usuario-dialogo.component";
import { Usuario } from "app/model/usuario";
import { UsuarioService } from "app/services/usuario.service";
import { CambiarContraseñaDialogoComponent } from "app/components/cambiar-contrase\u00F1a-dialogo/cambiar-contrase\u00F1a-dialogo.component";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  loading: boolean;
  usuarios: Usuario[];
  roles: any[];

  constructor(private usuarioSrv: UsuarioService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.loading = true;
    console.log("get roles");
    this.usuarioSrv.getRoles()
      .subscribe(res => this.roles = res);

    this.usuarioSrv.getUsuarios()
      .subscribe(res => {
        this.usuarios = res;
        this.loading = false;
      });
  }


  cambiarPasswordUsuario(usuario: Usuario) {

   let newpassword:string;

    let dialogRef = this.dialog.open(CambiarContraseñaDialogoComponent, {
      data: {
        usuario: usuario,
        password:newpassword      
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading = true;

        this.usuarioSrv.updatePassword(usuario.id_usuario, newpassword )
          .subscribe(res => {
            
            this.loading = false;
            this.snackBar.open("Usuario Actualizado", "Cerrar", {
              duration: 2000
            });

          });


      }

    });

  }


  editarUsuario(usuario: Usuario) {

    let copia = Usuario.copiar(usuario);

    let dialogRef = this.dialog.open(EditarUsuarioDialogoComponent, {
      data: {
        usuario: copia,
        roles: this.roles
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading = true;

        this.usuarioSrv.updateUsuario(usuario.id_usuario, copia)
          .subscribe(res => {

            let i = this.usuarios.indexOf(usuario);
            this.usuarios[i] = res;
            this.loading = false;
            this.snackBar.open("Usuario Actualizado", "Cerrar", {
              duration: 2000
            });

          });


      }

    });


  }


}
