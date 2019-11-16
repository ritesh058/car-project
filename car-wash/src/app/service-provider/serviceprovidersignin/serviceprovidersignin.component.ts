import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-serviceprovidersignin',
  templateUrl: './serviceprovidersignin.component.html',
  styleUrls: ['./serviceprovidersignin.component.css', '../../shared/shared.css']
})
export class ServiceprovidersigninComponent implements OnInit {
  serviceProviderLoginForm;

  constructor(public router:Router,public formBuilder:FormBuilder) { 
    this.serviceProviderLoginForm = this.formBuilder.group({
      mobileNo: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      serviceProviderPassword: ["",[Validators.required]],
      rememberMe: [true],
      
        })
        
  }

  

  ngOnInit() {
  }

  userSignIn(){
    this.router.navigate(['/user'])
  }
  submitUser(){
    console.log(this.serviceProviderLoginForm)
  }
  cancelSignIn(){
    console.log("Cancel not work")
  }
  



}
