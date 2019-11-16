import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validator';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';


@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css', '../../shared/shared.css']
})
export class UsersigninComponent implements OnInit {

  userLoginForm; errorMesg; userLoggedIn; loadSpinner: boolean = false;

  constructor(public formBuilder: FormBuilder, public router: Router, public userservice: UserService, public databaseCall: DatabaseHttpCallService) {
    this.userLoginForm = formBuilder.group({
      mobileNo: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidator.numberValidation]],
      userPassword: ["", [Validators.required]],
      rememberMe: [true],

    });
    if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
      this.router.navigate(["/user/userdashboard"]);
    }

  }

  serviceProviderSignIn() {
    this.userservice.serviceProviderSignIn()
  }

  // mobileNumberValidation(inputField) {
  //   if (inputField.value.match(/\D/)) {
  //     return { ERROR: 'Not a number' }
  //   }
  //   return null;

  // }

  submitUser() {
    this.errorMesg = "";
    let searchParam = { "userId": this.userLoginForm.value.mobileNo, "password": this.userLoginForm.value.userPassword };
    this.loadSpinner = true;
    this.databaseCall.postData('usersignin', searchParam).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user_id', res.user._id);
      localStorage.setItem('userName', res.user.userName)

      this.router.navigate(["/user/userdashboard"]);
    }, error => {
      this.loadSpinner = false;
      if (error.error) {
        if (error.error.err) {
          this.errorMesg = "User Id and Password doesnot match"
        }
      }
      else
        this.errorMesg = "Technical Error...Contact service provider"

    })

  }

  cancelSignIn() {
    this.router.navigate(["/"])
  }

  ngOnInit() {
  }
}
