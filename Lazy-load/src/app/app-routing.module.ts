import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'auth', //Cuando alguien entra al auth, se empieza a cargar este módulo.
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule) 
    /* el import es una función que retorna una promesa. Cuando se ejecuta, es decir, cuando se carga el módulo
    se activa "then" */
  },
  {
    path: 'productos', 
    loadChildren: () => import('./productos/productos.module').then( module => module.ProductosModule ) 
  },
  {
    path: 'usuarios', 
    loadChildren: () => import('./usuarios/usuarios.module').then( module => module.UsuariosModule ) 
  },
  {
    path: '**',
    redirectTo:'auth'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //El forRoot es para definir las rutas principales, que se encuentran en la constante.
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
