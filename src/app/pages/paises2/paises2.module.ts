import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Paises2RoutingModule } from './paises2-routing.module';
import { Paises2Component } from './paises2.component';
import { AgilisServicesComponent, AgilisServicesModule } from '@agilis/common';
import { NGXBootstrapModule } from 'src/app/modules/bootstrap.module';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [Paises2Component],
  imports: [
    CommonModule,
    Paises2RoutingModule,
    MaterialModule,
    NGXBootstrapModule,
    AgilisServicesModule
  ]
})
export class Paises2Module { }
