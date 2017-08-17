import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FileSelectDirective, FileUploaderOptions, FileUploader } from "ng2-file-upload";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-agregar-ficha-tecnica-dialogo',
  templateUrl: './agregar-ficha-tecnica-dialogo.component.html',
  styleUrls: ['./agregar-ficha-tecnica-dialogo.component.scss']
})
export class AgregarFichaTecnicaDialogoComponent implements OnInit {

  url: string = "http://localhost:8080/barroco/api/index.php/productos/upload_fichatecnica";

  uploader: FileUploader; //= new FileUploader({ url: this.url });

  @ViewChild("inputFile") inputFile: any;
  @ViewChild("inputFile2") inputFile2: any;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<AgregarFichaTecnicaDialogoComponent>
  ) {


    this.uploader = new FileUploader({
      url: this.url,
      queueLimit: 1,
      removeAfterUpload: true,
      additionalParameter: {
        nombre: "nombre" + this.data.id_producto,
        id_producto: this.data.id_producto,
        descripion: null,
      }

    });

    //this.uploader.onCompleteAll = this.completeAll;

    this.uploader.onCompleteAll = () => {
      console.log(this.inputFile.nativeElement.files);
      this.inputFile.nativeElement.value = "";
      console.log(this.inputFile.nativeElement.files);
    };

    //console.log("File Uploader Options", this.uploader.options);
  }

  ngOnInit() {
  }

  resetInputFile() {
    console.log(this.inputFile.nativeElement.files);
    this.inputFile.nativeElement.value = "";
    console.log(this.inputFile.nativeElement.files);
  }

  completeAll() {
    console.log("complete all");
    console.log(this.inputFile.nativeElement.files);
    this.inputFile.nativeElement.value = "";
    console.log(this.inputFile.nativeElement.files);


  }

  updateNombreArchivo() {
    console.log("updateNombreArchivo");
  }

  editarNombreArchivo() {
    console.log("editarNombreArchivo");
  }

  verDocumento() {
    console.log("verDocumento");
  }



}
