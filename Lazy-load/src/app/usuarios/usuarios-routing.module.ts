import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from '../productos/pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  { path:'',
    children: [
      {path:'nuevo', component: NuevoComponent},
      {path:'agregar', component: AgregarComponent},
      {path:'listado', component: ListadoComponent},
      {path:'usuario', component: UsuarioComponent},
      {path:'**', redirectTo: 'listado'},
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
