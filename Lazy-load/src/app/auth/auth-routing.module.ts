import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'forgot', component: ForgotComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path:'**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [  //Estas son rutas secundarias del módulo. El principal es el appRoutingModule
    RouterModule.forChild( routes ) //Por eso, acá va .forChild y no .forRoot
  ]
})
export class AuthRoutingModule { }
