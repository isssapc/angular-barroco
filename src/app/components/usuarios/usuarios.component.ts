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
  usuarios: Usuario[];

  constructor(private usuarioSrv: UsuarioService, public dialog: MdDialog, public snackBar:MdSnackBar) { }

  ngOnInit() {
    this.usuarioSrv.getUsuarios()
      .subscribe(res => this.usuarios = res);
  }

  editarUsuario(usuario: Usuario) {

    let copia = Usuario.copiar(usuario);    

    let dialogRef= this.dialog.open(EditarUsuarioDialogoComponent, {
      data: {usuario:copia}
    });

    dialogRef.afterClosed().subscribe(result=>{
     
      if(result===true){

        this.usuarioSrv.updateUsuario(usuario.id_usuario, copia)
        .subscribe(res=>{

          let i= this.usuarios.indexOf(usuario);
          this.usuarios[i]= res;
          this.snackBar.open("Usuario Actualizado", "Cerrar",{
            duration:2000
          });

        });


      }

    });


  }

}
