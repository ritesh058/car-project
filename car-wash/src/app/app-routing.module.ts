import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from 'src/app/shared/error/error.component';



const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  },
  {
    path:"user",
    loadChildren: () =>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:"serviceprovider",
    loadChildren:()=>import('./service-provider/service-provider.module').then(mod=>mod.ServiceProviderModule)
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
