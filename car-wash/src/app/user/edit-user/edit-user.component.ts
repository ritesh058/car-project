import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css', '../../shared/shared.css']
})
export class EditUserComponent implements OnInit {
  successMesg:String; errorMesg:String; editProfile ;uploadImg:boolean=false;imagePreview;

  user = {
    userName: "",
    mobileNo: "",
    emailId: "",
    address: "",
    pinCode: ""
  }
  constructor(public formBuilder: FormBuilder, public databaseCall: DatabaseHttpCallService, private router: Router) {}


  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }
    this.databaseCall.getData('userData').subscribe((res: any) => {
      this.user.userName = res.data.userName
      this.user.mobileNo = res.data.mobileNo
      this.user.emailId = res.data.emailId
      this.user.address = res.data.address
      this.user.pinCode = res.data.pinCode
    }, error => {
      this.router.navigate(["/user"]);
      // console.log(error)
    });

    this.editProfile = this.formBuilder.group({
      userName: [{ value: "", key1: "riteshkumar" }],
      mobileNo: [{ value: '', disabled: true }],
      emailId: ['', Validators.email],
      address: [],
      pinCode: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]]
    })


  }

  updateUser() {
    let controls = this.editProfile.controls;
    let toUpdateField: any = {};
    for (let e in controls) {
      if (controls[e].dirty) {
        toUpdateField[e] = controls[e].value;
      }
    }
    if (Object.entries(toUpdateField).length > 0) {
      this.databaseCall.postData('userupdate', toUpdateField).subscribe(res => console.log(res));
    }
    else{
      this.errorMesg="There is no change in user profile";
    }

  }

  cancelEdit() {
    this.router.navigate(["/user/userdashboard"])
  }

  selectFile(event:Event){
    let fileSelected = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
      this.imagePreview = reader.result
      console.log(this.imagePreview)
    }

    reader.readAsDataURL(fileSelected)

  }

  toggleImgUpload(){
    this.uploadImg=!this.uploadImg;
  }


}
