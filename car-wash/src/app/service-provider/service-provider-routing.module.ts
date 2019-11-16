import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceprovidersigninComponent } from 'src/app/service-provider/serviceprovidersignin/serviceprovidersignin.component';
import { UsersigninComponent } from 'src/app/user/usersignin/usersignin.component';
import { ServiceprovidersignupComponent } from 'src/app/service-provider/serviceprovidersignup/serviceprovidersignup.component';
import { ForgetpasswordComponent } from 'src/app/shared/forgetpassword/forgetpassword.component';



const routes: Routes = [
  {
    path:"",
    component:ServiceprovidersigninComponent
  },
  {
    path:'serviceprovider',
    redirectTo:"",
    pathMatch:"full"
  },
  {
    path:'servicesignup',
    component:ServiceprovidersignupComponent
  },
  {
    path:'forgetPassword',
    component:ForgetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderRoutingModule { }
