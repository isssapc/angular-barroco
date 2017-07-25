import { Injectable } from '@angular/core';
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class AuthService {
  url: string = "http://192.168.0.107:8080/barroco/api/index.php/auth/";
  //url: string = "http://localhost:8080/barroco/api/index.php/auth/";

  constructor(private http: Http) { }

  login(usuario) {
    return this.http.post(this.url + 'login', { usuario: usuario })
      .map(this.extractData)
      .catch(this.handleError);
  }

  loggedIn() {
    return tokenNotExpired();
  }




  private extractData(res: Response) {
    //console.log("response", res);
    let body = res.json();
    console.log("response.json", body);

    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
