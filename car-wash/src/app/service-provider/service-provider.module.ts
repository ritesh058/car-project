import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { ServiceprovidersigninComponent } from './serviceprovidersignin/serviceprovidersignin.component';
import { ServiceprovidersignupComponent } from './serviceprovidersignup/serviceprovidersignup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ServiceprovidersigninComponent, ServiceprovidersignupComponent],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    ReactiveFormsModule,SharedModule
  ]
})
export class ServiceProviderModule { }
