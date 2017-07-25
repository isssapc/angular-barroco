import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "app/services/usuario.service";
import { Router } from "@angular/router";
import { JwtHelper } from "angular2-jwt/angular2-jwt";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: any = { email: "", password: "" };
  alert: string;
  jwtHelper: JwtHelper= new JwtHelper();

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(usuario) {
    this.auth.login(usuario)
      .subscribe(res => {
        if (res.error) {
          this.alert = res.error;
        } else {
          console.log("login", res);
          localStorage.setItem('token', res.token);
          this.usuario = { email: "", password: "" };
          this.alert = "";
          this.router.navigate(['/usuarios']);
        }
      });
  }

}
