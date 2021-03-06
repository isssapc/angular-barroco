import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EntradaService {
  //url: string = "http://192.168.0.107:8080/barroco/api/index.php/entradas/";
  url: string = "http://localhost:8080/barroco/api/index.php/entradas/";

  constructor(private http: Http) { }


  getEntradas() {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEntrada(id) {
    return this.http.get(this.url + 'get_entrada/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }


  createEntrada(num_factura, productos) {
    return this.http.post(this.url + 'create_entrada', { num_factura: num_factura, productos: productos })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateEntrada(id, entrada) {
    return this.http.post(this.url + 'update_entrada/' + id, { entrada: entrada })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delEntrada(id) {
    return this.http.get(this.url + 'del_entrada/' + id)
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
