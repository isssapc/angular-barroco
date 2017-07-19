import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material'; 
import { EditarClienteDialogoComponent } from "app/components/editar-cliente-dialogo/editar-cliente-dialogo.component";
import { Cliente } from "app/model/cliente";
import { ClienteService } from "app/services/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  loading: boolean;
  clientes: Cliente[];

  constructor(private clienteSrv: ClienteService, public dialog: MdDialog, public snackBar: MdSnackBar) { }

  ngOnInit() { 
    this.loading = true;
    this.clienteSrv.getClientes()
    .subscribe(res=> {
      this.clientes = res;
      this.loading = false;
    });
  }

  
  editarCliente(cliente: Cliente) {
    

        let copia = Cliente.copiar(cliente);

    let dialogRef = this.dialog.open(EditarClienteDialogoComponent, {
      data: { cliente: copia }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === true) {
        this.loading=true;

        this.clienteSrv.updateCliente(cliente.id_cliente, copia)
          .subscribe(res => {

            let i = this.clientes.indexOf(cliente);
            this.clientes[i] = res;
            this.loading=false;
            this.snackBar.open("Cliente Actualizado", "Cerrar", {
              duration: 2000
            });

          });


      }

    });
  }

}
