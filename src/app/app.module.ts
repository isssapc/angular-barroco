import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "app/angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule, NgbDatepickerI18n } from "@ng-bootstrap/ng-bootstrap";
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
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ProductoCategoriaService } from "app/services/producto-categoria.service";
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CambiarPasswordDialogoComponent } from "app/components/cambiar-password-dialogo/cambiar-password-dialogo.component";
import { SpanishDatepickerI18nService, I18n } from "app/services/spanish-datepicker-i18n.service";
import { ConfirmarBorradoDialogoComponent } from './components/confirmar-borrado-dialogo/confirmar-borrado-dialogo.component';
import { AuthService } from "app/services/auth.service";
import { AuthModule } from "app/auth.module";
import { EditarProductoDialogoComponent } from "app/components/editar-producto-dialogo/editar-producto-dialogo.component";



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
    EditarProductoDialogoComponent,
    EditarOrdenPedidoDialogoComponent,
    EditarSalidaAlmacenDialogoComponent,
    EditarSalidaAlmacenComponent,
    ProductoCategoriasComponent,
    AgregarCategoriaDialogoComponent,
    EditarEntradaDialogoComponent,
    OrdenesComponent,
    CambiarPasswordDialogoComponent,
    PerfilUsuarioComponent,
    ConfirmarBorradoDialogoComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    AuthModule
  ],
  entryComponents:[
    EditarUsuarioDialogoComponent,
    EditarProductoDialogoComponent,
    CambiarPasswordDialogoComponent,
    ConfirmarBorradoDialogoComponent
  ],
  providers: [
    I18n,
    {provide:NgbDatepickerI18n, useClass:SpanishDatepickerI18nService},
    UsuarioService,
    ClienteService,
    EntradaService,
    SalidaService,
    ProductoService,
    OrdenService,
    ProductoCategoriaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
