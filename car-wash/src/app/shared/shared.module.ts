import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { matchField  } from 'src/app/shared/matchControlField.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { AuthInterceptor } from 'src/app/shared/middleware/auth-interceptor';
import { ErrorComponent } from './error/error.component';






@NgModule({
  declarations: [HomeComponent, ForgetpasswordComponent,matchField, ErrorComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers:[DatabaseHttpCallService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  exports:[matchField,ForgetpasswordComponent]
})
export class SharedModule { }
