import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SalidaService {
  //url: string = "http://192.168.0.107:8080/barroco/api/index.php/salidas";
  url: string = "http://localhost:8080/barroco/api/index.php/salidas/";

  constructor(private http: Http) { }

  getSalidas() {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  createSalida(salida) {
    return this.http.post(this.url + 'create_salida', { salida: salida })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateSalida(id, salida) {
    return this.http.post(this.url + 'update_salida/' + id, { salida: salida })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delSalida(id) {
    return this.http.get(this.url + 'del_salida/' + id)
      .map(this.extractData)
      .catch(this.handleError);
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
