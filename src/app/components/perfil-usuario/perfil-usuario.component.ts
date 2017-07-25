import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Usuario } from "app/model/usuario";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.usuario = this.auth.getUsuario();
  }

}
