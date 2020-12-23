import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paises2Component } from './paises2.component';

const routes: Routes = [{ path: '', component: Paises2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Paises2RoutingModule { }
