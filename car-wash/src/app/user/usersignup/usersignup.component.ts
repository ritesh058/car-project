import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validator';
import { validationMessage } from 'src/app/shared/validation-message'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DatabaseHttpCallService } from '../../shared/database-http-call.service'
import { error } from 'selenium-webdriver';



@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css', '../../shared/shared.css']
})


export class UsersignupComponent implements OnInit {
  userSignUp; passwordDisabled = false; successMesg; errorMesg
  matchingPassword;
  validationMsg = validationMessage.errorMessage;
  formErr = validationMessage.formErrors;


  constructor(public formBuilder: FormBuilder, public router: Router, public userservice: UserService, public databaseCall: DatabaseHttpCallService) {
    this.userSignUp = this.formBuilder.group({
      userName: ["", [Validators.required]],
      mobileNo: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      emailId:["",[Validators.required,Validators.email]],
      matchingPassword: this.formBuilder.group({
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
      })

    }
    );
    this.userSignUp.valueChanges.subscribe(e => this.logValidationError(this.userSignUp))

  }



  ngOnInit() {
  }

  get confirmPassword() {
    return this.userSignUp.get('confirmPassword');
  }




  logValidationError(formgroup: FormGroup) {
    Object.keys(formgroup.controls).forEach((eachControl: string) => {
      const abstrachControl = formgroup.get(eachControl);
      if (abstrachControl instanceof FormGroup) {
        this.logValidationError(abstrachControl)
      }
      else {
        this.formErr[eachControl] = "";
        if (abstrachControl && !abstrachControl.valid && (abstrachControl.touched || abstrachControl.dirty)) {
          const message = this.validationMsg[eachControl]
          for (const errorKey in abstrachControl.errors) {
            if (errorKey) {
              this.formErr[eachControl] += message[errorKey] + ' ';
            }
          }
        }
      }
    })
  }

  serviceProviderSignIn() {
    this.userservice.serviceProviderSignIn();
  }

  res

  submitUser() {
    this.successMesg = "";
    this.databaseCall.postData('usersignup', this.userSignUp.value).subscribe((res: any) => {
      this.errorMesg = "";
      this.successMesg = "";

      if (res.msg) {
        this.successMesg = res.msg;
        this.userSignUp.reset();

      }
      else {
        this.errorMesg = "Mobile is already registered"
      }

    }, (error) => {
      this.errorMesg = "";
      error.error && error.error.err ? this.errorMesg = error.error.err : "Contact Administrator";
    }

    )

  }

  cancelSignIn() {
    this.router.navigate(["/user"])
  }

}
