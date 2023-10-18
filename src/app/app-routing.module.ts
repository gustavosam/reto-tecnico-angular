import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisasComponent } from './divisas/divisas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'divisas', component: DivisasComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
