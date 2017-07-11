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
    { path: 'salida-almacen', component: SalidaAlmacenComponent  }


];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
