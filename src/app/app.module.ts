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
    ReportesComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
