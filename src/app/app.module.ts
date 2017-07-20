import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "app/angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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
import { OrdenCompraComponent } from './components/orden-compra/orden-compra.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SalidasAlmacenComponent } from './components/salidas-almacen/salidas-almacen.component';
import { EntradasAlmacenComponent } from './components/entradas-almacen/entradas-almacen.component';
import { EditarUsuarioDialogoComponent } from './components/editar-usuario-dialog/editar-usuario-dialogo.component';
import { EditarClienteDialogoComponent } from './components/editar-cliente-dialogo/editar-cliente-dialogo.component';
import { EditarInventarioDialogoComponent } from './components/editar-inventario-dialogo/editar-inventario-dialogo.component';
import { EditarOrdenPedidoDialogoComponent } from './components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component';
import { EditarSalidaAlmacenDialogoComponent } from './components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component';
import { EditarSalidaAlmacenComponent } from './components/editar-salida-almacen/editar-salida-almacen.component';
import { ProductoCategoriasComponent } from './components/producto-categorias/producto-categorias.component';
import { AgregarCategoriaDialogoComponent } from './components/agregar-categoria-dialogo/agregar-categoria-dialogo.component';
import { EditarEntradaDialogoComponent } from './components/editar-entrada-dialogo/editar-entrada-dialogo.component';
import { OrdenService } from "app/services/orden.service";
import { ProductoService } from "app/services/producto.service";
import { SalidaService } from "app/services/salida.service";
import { EntradaService } from "app/services/entrada.service";
import { ClienteService } from "app/services/cliente.service";
import { UsuarioService } from "app/services/usuario.service";



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
    OrdenCompraComponent,
    ReportesComponent,
    UsuariosComponent,
    SalidasAlmacenComponent,
    EntradasAlmacenComponent,
    EditarUsuarioDialogoComponent,
    EditarClienteDialogoComponent,
    EditarInventarioDialogoComponent,
    EditarOrdenPedidoDialogoComponent,
    EditarSalidaAlmacenDialogoComponent,
    EditarSalidaAlmacenComponent,
    ProductoCategoriasComponent,
    AgregarCategoriaDialogoComponent,
    EditarEntradaDialogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  entryComponents:[
    EditarUsuarioDialogoComponent,
    EditarInventarioDialogoComponent
  ],
  providers: [
    UsuarioService,
    ClienteService,
    EntradaService,
    SalidaService,
    ProductoService,
    OrdenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
