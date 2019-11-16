import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css', '../../shared/shared.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword; errorMesg: String = ""

  constructor(private formBuilder: FormBuilder,private databaseCall:DatabaseHttpCallService,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }
    this.changePassword = this.formBuilder.group({
      newPassword: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    })
  }

  //this is a common line

  changeUserPassword(firstValue, secondValue) {
    try {
      if (firstValue == secondValue) {
        this.databaseCall.postData('changePassword',{"userPassword":secondValue}).subscribe(res=>this.router.navigate(['/user']),error=>{
          if(error.error && error.error.err ){
        this.errorMesg = error.error.err;
      }
        })
      }
      else {
        this.errorMesg = "New Password and Confirm Password donot match"
      }

    }
    catch (error) {
      console.log("error.error.err");
      // if(error.error && error.error.err ){
      //   this.errorMesg = error.error.err;
      // }
    }

  }

}
