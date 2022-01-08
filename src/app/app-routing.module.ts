import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablaUsuariosComponent} from './usuarios/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
{path:'', redirectTo:'users', pathMatch:'full'},
{path:'users', component:TablaUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[TablaUsuariosComponent]
