import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {path: 'home', canActivate : [AuthGuard], loadChildren: () => import('./home/home.module').then( m => m.HomePageModule, )},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', canActivate : [NologinGuard], loadChildren: () => import('./componente/login/login.module').then( m => m.LoginPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
