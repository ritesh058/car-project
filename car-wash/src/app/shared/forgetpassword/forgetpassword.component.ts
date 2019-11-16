import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css','../shared.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPassword;

  constructor(public formBuilder:FormBuilder,public router:Router) { 

    this.forgetPassword=this.formBuilder.group({
      currentPassword:[],
      newPassword:[],
      confirmPassword:[]

    })
  }

  ngOnInit() {
  }

  changePassword(){
    console.log(this.forgetPassword)
  }

  nagivate(val){
    let calledBy=(val=="user")?'/user':'/serviceprovider';
    this.router.navigate([`${calledBy}`]);
  }


}
