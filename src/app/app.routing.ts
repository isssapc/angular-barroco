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
import { OrdenCompraComponent } from "app/components/orden-compra/orden-compra.component";
import { SalidaAlmacenComponent } from "app/components/salida-almacen/salida-almacen.component";
import { UsuariosComponent } from "app/components/usuarios/usuarios.component";
import { SalidasAlmacenComponent } from "app/components/salidas-almacen/salidas-almacen.component";
import { EntradasAlmacenComponent } from "app/components/entradas-almacen/entradas-almacen.component";
import { EditarClienteDialogoComponent } from "app/components/editar-cliente-dialogo/editar-cliente-dialogo.component";
import { EditarInventarioDialogoComponent } from "app/components/editar-inventario-dialogo/editar-inventario-dialogo.component";
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";
import { EditarSalidaAlmacenDialogoComponent } from "app/components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component";
import { EditarSalidaAlmacenComponent } from "app/components/editar-salida-almacen/editar-salida-almacen.component";
import { ProductoCategoriasComponent } from "app/components/producto-categorias/producto-categorias.component";
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";
import { EditarEntradaDialogoComponent } from "app/components/editar-entrada-dialogo/editar-entrada-dialogo.component";





export const ROUTES: Routes = [
    { path: '', redirectTo: 'nuevo-usuario', pathMatch: 'full' },
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
    { path: 'clientes', component: ClientesComponent  },
    { path: 'entrada-almacen', component: EntradaAlmacenComponent  },
    { path: 'inventario', component: InventarioComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'nuevo-cliente', component: NuevoClienteComponent },
    { path: 'nuevo-producto', component: NuevoProductoComponent },
    { path: 'orden-compra', component: OrdenCompraComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'salida-almacen', component: SalidaAlmacenComponent  },
    { path: 'usuarios', component: UsuariosComponent  },
    { path: 'salidas-almacen', component: SalidasAlmacenComponent  },
    { path: 'entradas-almacen', component: EntradasAlmacenComponent  },
    { path: 'editar-cliente-dialogo', component: EditarClienteDialogoComponent  },
    { path: 'editar-inventario-dialogo', component: EditarInventarioDialogoComponent  },
    { path: 'editar-orden-pedido-dialogo', component: EditarOrdenPedidoDialogoComponent  },
    { path: 'editar-salida-almacen-dialogo', component: EditarSalidaAlmacenDialogoComponent  },
    { path: 'editar-salida-almacen', component: EditarSalidaAlmacenComponent  },
    { path: 'producto-categorias', component: ProductoCategoriasComponent  },
    { path: 'agregar-categoria-dialogo', component: AgregarCategoriaDialogoComponent  },
    { path: 'editar-entrada-dialogo', component: EditarEntradaDialogoComponent  }



];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
