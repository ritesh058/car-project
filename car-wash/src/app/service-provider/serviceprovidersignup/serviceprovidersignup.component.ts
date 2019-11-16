import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-serviceprovidersignup',
  templateUrl: './serviceprovidersignup.component.html',
  styleUrls: ['./serviceprovidersignup.component.css', '../../shared/shared.css']
})
export class ServiceprovidersignupComponent implements OnInit {
  serviceProviderSignUp;
  constructor(public router: Router, public formBuilder: FormBuilder) {
    this.serviceProviderSignUp = this.formBuilder.group({
      firmName: ["",Validators.required],
      ownerName: ["",Validators.required],
      mobileNo: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')  ]],
      emailId: ["",Validators.email],
      address: ["",Validators.required],
      pinCode: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*') ]],
      matchingPassword: this.formBuilder.group(
        {
          password: ["",Validators.required],
          confirmPassword: ["",Validators.required]
        })

    })
  }

  ngOnInit() {
  }
  userSignIn() {
    this.router.navigate(['/user'])
  }
  submitServiceProvider() {
    console.log(this.serviceProviderSignUp)
  }
  cancelSignIn(){
    this.router.navigate(['/serviceprovider'])
  }

}
