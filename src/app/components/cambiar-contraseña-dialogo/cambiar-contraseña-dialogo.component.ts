import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-cambiar-contraseña-dialogo',
  templateUrl: './cambiar-contraseña-dialogo.component.html',
  styleUrls: ['./cambiar-contraseña-dialogo.component.scss']
})
export class CambiarContraseñaDialogoComponent implements OnInit {

  usuario:any;
  password:string;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<CambiarContraseñaDialogoComponent>
  ) { }

  ngOnInit() {
    this.usuario=this.data.usuario;
    this.password=this.data.password;
  }

}
