import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBookingServiceComponent } from './user-booking-service/user-booking-service.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserOlderHistoryComponent } from './user-older-history/user-older-history.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserService } from 'src/app/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailedBookingComponent } from './user-detailed-booking/user-detailed-booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';





@NgModule({
  declarations: [UsersigninComponent, UsersignupComponent, UserDashboardComponent, UserBookingServiceComponent, UserHeaderComponent, UserOlderHistoryComponent, EditUserComponent, UserDetailedBookingComponent, ChangePasswordComponent],
  imports: [
    CommonModule,FormsModule,
    UserRoutingModule,FormsModule,ReactiveFormsModule,SharedModule,HttpClientModule
  ],
  providers:[UserService]
})
export class UserModule { }
