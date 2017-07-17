import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductoService {
  url: string = "http://localhost:8080/barroco/api/index.php/";

  constructor(private http: Http) { }


  getProductos() {
    return this.http.get(this.url + 'productos/')
      .map(this.extractData)
      .catch(this.handleError);
  }


  createProducto(producto) {
    return this.http.post(this.url + 'create_producto', { producto: producto })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateProducto(id, producto) {
    return this.http.post(this.url + 'update_producto/' + id, { producto: producto })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delProducto(id) {
    return this.http.get(this.url + 'del_producto/' + id)
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
