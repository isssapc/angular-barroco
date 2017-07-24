import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductoCategoriaService {
  url: string = "http://192.168.0.107:8080/barroco/api/index.php/categorias/";
  //url: string = "http://localhost:8080/barroco/api/index.php/categorias/";

  constructor(private http: Http) { }

  getProductoCategorias() {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createProductoCategoria(categoria) {
    return this.http.post(this.url + 'create_categoria', { categoria: categoria })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateProductoCategoria(id, categoria) {
    return this.http.post(this.url + 'update_categoria/' + id, { categoria: categoria })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delProductoCategoria(id) {
    return this.http.get(this.url + 'del_categoria/' + id)
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
