import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersigninComponent } from 'src/app/user/usersignin/usersignin.component';
import { UsersignupComponent } from 'src/app/user/usersignup/usersignup.component';
import { ForgetpasswordComponent } from 'src/app/shared/forgetpassword/forgetpassword.component';
import { UserDashboardComponent } from 'src/app/user/user-dashboard/user-dashboard.component';
import { UserBookingServiceComponent } from 'src/app/user/user-booking-service/user-booking-service.component';
import { UserOlderHistoryComponent } from 'src/app/user/user-older-history/user-older-history.component';
import { EditUserComponent } from 'src/app/user/edit-user/edit-user.component';
import { UserDetailedBookingComponent } from 'src/app/user/user-detailed-booking/user-detailed-booking.component';
import { ChangePasswordComponent } from 'src/app/user/change-password/change-password.component';

//home route is "user"
const routes: Routes = [
  {
    path:'',
    component:UsersigninComponent
  },
  {
    path:'usersignup',
    component:UsersignupComponent
  },
  {
    path:'forgetPassword',
    component:ForgetpasswordComponent
  },
  {
    path:"backhome",
    redirectTo:"/",
    pathMatch:'full'
    
  },
  {
    path:"usersignup/backlogin",
    redirectTo:"",
    pathMatch:"full"
  },
  {
    path:"user",
    redirectTo:"",
    pathMatch:"full"
  },
  {
    path:"usersignup/user",
    redirectTo:"",
    pathMatch:"full"
  },
  {
    path:"userdashboard",
    component:UserDashboardComponent
  },
  {
    path:'userdashboard/userBookingService',
    component:UserBookingServiceComponent
  },
  {
    path:'userdashboard/userBookingHistory',
    component:UserOlderHistoryComponent
  },
  {
    path:'userdashboard/userEdit',
    component:EditUserComponent
  },
  {
    path:'userdashboard/userEdit/userEdit',
    redirectTo:"userdashboard/userEdit",
    pathMatch:"full"
  },
  {
    path:'userdashboard/eachbookinghistory',
    component:UserDetailedBookingComponent
  },
  {
    path:'userdashboard/changepassword',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
