import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrdenService {
  url: string = "http://localhost:8080/barroco/api/index.php/";

  constructor(private http: Http) { }


  getOrdenes() {
    return this.http.get(this.url + 'ordenes/')
      .map(this.extractData)
      .catch(this.handleError);
  }

  createOrden(orden) {
    return this.http.post(this.url + 'create_orden', { orden: orden })
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateOrden(id, orden) {
    return this.http.post(this.url + 'update_orden/' + id, { orden: orden })
      .map(this.extractData)
      .catch(this.handleError);
  }

  delOrden(id) {
    return this.http.get(this.url + 'del_orden/' + id)
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
