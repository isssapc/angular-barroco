import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ClienteService {

  url: string = "http://localhost:8080/barroco/api/index.php/clientes/";

  constructor(private http: Http) { }


  getClientes() {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createCliente(cliente) {
    return this.http.post(this.url + 'create_cliente', { cliente: cliente })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateCliente(id, cliente) {
    return this.http.post(this.url + 'update_cliente/' + id, { cliente: cliente })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delCliente(id) {
    return this.http.get(this.url + 'del_cliente/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractData(res: Response) {
    console.log("response", res);
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
