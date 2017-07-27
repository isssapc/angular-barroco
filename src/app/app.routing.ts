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
import { EditarOrdenPedidoDialogoComponent } from "app/components/editar-orden-pedido-dialogo/editar-orden-pedido-dialogo.component";
import { EditarSalidaAlmacenDialogoComponent } from "app/components/editar-salida-almacen-dialogo/editar-salida-almacen-dialogo.component";
import { EditarSalidaAlmacenComponent } from "app/components/editar-salida-almacen/editar-salida-almacen.component";
import { ProductoCategoriasComponent } from "app/components/producto-categorias/producto-categorias.component";
import { AgregarCategoriaDialogoComponent } from "app/components/agregar-categoria-dialogo/agregar-categoria-dialogo.component";
import { EditarEntradaDialogoComponent } from "app/components/editar-entrada-dialogo/editar-entrada-dialogo.component";
import { OrdenesComponent } from "app/components/ordenes/ordenes.component";
import { PerfilUsuarioComponent } from "app/components/perfil-usuario/perfil-usuario.component";
import { CambiarPasswordDialogoComponent } from "app/components/cambiar-password-dialogo/cambiar-password-dialogo.component";
import { EditarProductoDialogoComponent } from "app/components/editar-producto-dialogo/editar-producto-dialogo.component";
import { LayoutComponent } from "app/components/layout/layout.component";
import { AgregarFichaTecnicaDialogoComponent } from "app/components/agregar-ficha-tecnica-dialogo/agregar-ficha-tecnica-dialogo.component";
import { EditarOrdenCompraComponent } from "app/components/editar-orden-compra/editar-orden-compra.component";
import { TableroComponent } from "app/components/tablero/tablero.component";





export const ROUTES: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo:'usuarios', pathMatch:'full' },
            { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
            { path: 'clientes', component: ClientesComponent },
            { path: 'entrada-almacen', component: EntradaAlmacenComponent },
            { path: 'inventario', component: InventarioComponent },           
            { path: 'nuevo-cliente', component: NuevoClienteComponent },
            { path: 'nuevo-producto', component: NuevoProductoComponent },
            { path: 'orden-compra', component: OrdenCompraComponent },
            { path: 'reportes', component: ReportesComponent },
            { path: 'salida-almacen', component: SalidaAlmacenComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'salidas-almacen', component: SalidasAlmacenComponent },
            { path: 'entradas-almacen', component: EntradasAlmacenComponent },
            { path: 'editar-cliente-dialogo', component: EditarClienteDialogoComponent },
            { path: 'editar-producto-dialogo', component: EditarProductoDialogoComponent },
            { path: 'editar-orden-pedido-dialogo', component: EditarOrdenPedidoDialogoComponent },
            { path: 'editar-salida-almacen-dialogo', component: EditarSalidaAlmacenDialogoComponent },
            { path: 'editar-salida-almacen', component: EditarSalidaAlmacenComponent },
            { path: 'producto-categorias', component: ProductoCategoriasComponent },
            { path: 'agregar-categoria-dialogo', component: AgregarCategoriaDialogoComponent },
            { path: 'editar-entrada-dialogo', component: EditarEntradaDialogoComponent },
            { path: 'ordenes', component: OrdenesComponent },
            { path: 'cambiar-password', component: CambiarPasswordDialogoComponent },
            { path: 'perfil-usuario', component: PerfilUsuarioComponent },
            { path: 'agregar-ficha-tecnica-dialogo', component: AgregarFichaTecnicaDialogoComponent },
            { path: 'editar-orden-compra/:id', component: EditarOrdenCompraComponent },
             { path: 'tablero', component: TableroComponent },


        ]
    },


    { path: 'login', component: LoginComponent },

    //not found
    { path: '**', redirectTo: 'usuarios' }


];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
