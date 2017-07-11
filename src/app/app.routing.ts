import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

//components
import { NuevoUsuarioComponent } from "app/components/nuevo-usuario/nuevo-usuario.component";





export const ROUTES: Routes = [
    { path: '', redirectTo: 'nuevo-usuario', pathMatch: 'full' },
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent }


];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
