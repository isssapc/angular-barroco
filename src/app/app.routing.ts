import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

//components
import { NuevoUsuarioComponent } from "app/components/nuevo-usuario/nuevo-usuario.component";
import { ClientesComponent } from "app/components/clientes/clientes.component";
import { EntradaAlmacenComponent } from "app/components/entrada-almacen/entrada-almacen.component";
import { InventarioComponent } from "app/components/inventario/inventario.component";
import { LoginComponent } from "app/components/login/login.component";
import { NuevoClienteComponent } from "app/components/nuevo-cliente/nuevo-cliente.component";
import { NuevoProductoComponent } from "app/components/nuevo-producto/nuevo-producto.component";
import { ReportesComponent } from "app/components/reportes/reportes.component";
import { OrdenPedidoComponent } from "app/components/orden-pedido/orden-pedido.component";
import { SalidaAlmacenComponent } from "app/components/salida-almacen/salida-almacen.component";
import { UsuariosComponent } from "app/components/usuarios/usuarios.component";
import { SalidasAlmacenComponent } from "app/components/salidas-almacen/salidas-almacen.component";
import { EntradasAlmacenComponent } from "app/components/entradas-almacen/entradas-almacen.component";
import { EditarClienteDialogoComponent } from "app/components/editar-cliente-dialogo/editar-cliente-dialogo.component";
import { EditarInventarioDialogoComponent } from "app/components/editar-inventario-dialogo/editar-inventario-dialogo.component";
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";





export const ROUTES: Routes = [
    { path: '', redirectTo: 'nuevo-usuario', pathMatch: 'full' },
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
    { path: 'clientes', component: ClientesComponent  },
    { path: 'entrada-almacen', component: EntradaAlmacenComponent  },
    { path: 'inventario', component: InventarioComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'nuevo-cliente', component: NuevoClienteComponent },
    { path: 'nuevo-producto', component: NuevoProductoComponent },
    { path: 'orden-pedido', component: OrdenPedidoComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'salida-almacen', component: SalidaAlmacenComponent  },
    { path: 'usuarios', component: UsuariosComponent  },
    { path: 'salidas-almacen', component: SalidasAlmacenComponent  },
    { path: 'entradas-almacen', component: EntradasAlmacenComponent  },
    { path: 'editar-cliente-dialogo', component: EditarClienteDialogoComponent  },
    { path: 'editar-inventario-dialogo', component: EditarInventarioDialogoComponent  },
    { path: 'editar-orden-pedido-dialogo', component: EditarOrdenPedidoDialogoComponent  }



];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
