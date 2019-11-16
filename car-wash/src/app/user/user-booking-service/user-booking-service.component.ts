import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-booking-service',
  templateUrl: './user-booking-service.component.html',
  styleUrls: ['./user-booking-service.component.css', '../../shared/shared.css']
})
export class UserBookingServiceComponent implements OnInit {
  bookingCarService; presentDate = new Date();flag
  successMesg; errorMesg;
  requiredField = "* Required Field";
  pickupRequired:boolean;
  loadSpinner:boolean=false;
  // pickupRequire = this.bookingCarService.get("pickUp").value

  constructor(public formBuilder: FormBuilder, public databaseCall: DatabaseHttpCallService,public router:Router) {
    this.bookingCarService = this.formBuilder.group({
      vechileNo: ['', Validators.required],
      vechileType: ['', Validators.required],
      ownerName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      serviceType: ['', Validators.required],
      requirement: ['', Validators.required],
      budgetPrice: ['', Validators.required],
      areaLocation: ['', Validators.required],
      serviceDate: [this.presentDate, Validators.required],
      pickUp: [''],
      pickupDetail: this.formBuilder.group({
        pickLocation: [''],
        pickupDate: [''],
      }),
    })
  }

  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }
  }

  submitBooking() {
    this.loadSpinner=true;
    this.databaseCall.postData('user-car-booking', this.bookingCarService.value).subscribe(res => {
      this.loadSpinner=false;
      this.errorMesg = "";
      this.successMesg = `Booking has been saved`;
      this.bookingCarService.reset();
      
    },
      error => {
        this.loadSpinner=false;
        this.successMesg = "";
        this.errorMesg = "Please try again after sometime as couldnot connect to database"
      }
    )
  }

  cancelBooking() {
    this.router.navigate(["/user/userdashboard"])
  }

}
