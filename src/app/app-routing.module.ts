import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'paises2', pathMatch: 'full' },
  { path: 'paises', loadChildren: () => import('./pages/paises/paises.module').then(m => m.PaisesModule) },
  { path: 'paises2', loadChildren: () => import('./pages/paises2/paises2.module').then(m => m.Paises2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
