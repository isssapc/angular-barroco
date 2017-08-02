import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-agregar-ficha-tecnica-dialogo',
  templateUrl: './agregar-ficha-tecnica-dialogo.component.html',
  styleUrls: ['./agregar-ficha-tecnica-dialogo.component.scss']
})
export class AgregarFichaTecnicaDialogoComponent implements OnInit {

  url: string = "http://localhost:8080/barroco/api/index.php/productos/upload_fichatecnica";

  uploader: FileUploader = new FileUploader({ url: this.url });
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
