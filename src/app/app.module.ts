import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "app/angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

//routing
import { RoutingModule } from "app/app.routing";

//services

//components
import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { EntradaAlmacenComponent } from './components/entrada-almacen/entrada-almacen.component';
import { SalidaAlmacenComponent } from './components/salida-almacen/salida-almacen.component';
import { OrdenPedidoComponent } from './components/orden-pedido/orden-pedido.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SalidasAlmacenComponent } from './components/salidas-almacen/salidas-almacen.component';
import { EntradasAlmacenComponent } from './components/entradas-almacen/entradas-almacen.component';
import { EditarUsuarioDialogComponent } from './components/editar-usuario-dialog/editar-usuario-dialog.component';
import { EditarClienteDialogoComponent } from './components/editar-cliente-dialogo/editar-cliente-dialogo.component';
import { EditarInventarioDialogoComponent } from './components/editar-inventario-dialogo/editar-inventario-dialogo.component';
import { EditarOrdenPedidoDialogoComponent } from './components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component';



@NgModule({
  declarations: [
    AppComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    ClientesComponent,
    NuevoClienteComponent,
    NuevoProductoComponent,
    InventarioComponent,
    EntradaAlmacenComponent,
    SalidaAlmacenComponent,
    OrdenPedidoComponent,
    ReportesComponent,
    UsuariosComponent,
    SalidasAlmacenComponent,
    EntradasAlmacenComponent,
    EditarUsuarioDialogComponent,
    EditarClienteDialogoComponent,
    EditarInventarioDialogoComponent,
    EditarOrdenPedidoDialogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  entryComponents:[
    EditarUsuarioDialogComponent,
    EditarInventarioDialogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
