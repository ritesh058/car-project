import { Component, OnInit } from '@angular/core';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detailed-booking',
  templateUrl: './user-detailed-booking.component.html',
  styleUrls: ['./user-detailed-booking.component.css', '../../shared/shared.css']
})
export class UserDetailedBookingComponent implements OnInit {
  
  presentDate: any; vechileRegistered; loadSpinner: boolean = false; objectId: String = ""; errorMesg: String = ""
  serviceDetail = {
    vechileNo: "",
    vechileType: "",
    ownerName: "",
    serviceType: "",
    requirement: "",
    budgetPrice: "",
    areaLocation: "",
    serviceDate: "",
    pickLocation: "",
    pickupDate: "",
    mobileNo: ""
  }

  constructor(public databaseCall: DatabaseHttpCallService, public router: Router, private activeRoute: ActivatedRoute) {


  }

  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }
    this.loadSpinner = true;
    this.activeRoute.queryParams.subscribe(res => {
      this.databaseCall.getData('bookingById', res).subscribe((res: any) => {
        console.log(res._id)
        this.loadSpinner = false;
        this.objectId = res._id;
        this.serviceDetail.vechileNo = res.vechileNo;
        this.serviceDetail.vechileType = res.vechileType;
        this.serviceDetail.ownerName = res.ownerName;
        this.serviceDetail.serviceType = res.serviceType;
        this.serviceDetail.requirement = res.requirement;
        this.serviceDetail.budgetPrice = res.budgetPrice;
        this.serviceDetail.mobileNo = res.mobileNo
        this.serviceDetail.areaLocation = res.areaLocation;
        this.serviceDetail.serviceDate = res.serviceDate;
        this.serviceDetail.pickLocation = res.pickupDetail.pickLocation;
        this.serviceDetail.pickLocation = res.pickupDetail.pickLocation;
      })
    })
  }

  deleteBoking() {
    if (confirm("Are you sure to delete ")) {
      this.databaseCall.deleteById('deleteuserbooking', { _id: this.objectId }).subscribe(res => {
        this.router.navigate(['/user/userdashboard/userBookingHistory'])

      }),
        error => {
          if (error.error) {
            if (error.error.err) {
              this.errorMesg = error.error.err;
            }
          }
          else
            this.errorMesg = "Technical Error...Contact service provider"
        }

    }

  }
  cancelBooking() {
    this.router.navigate(['/user/userdashboard'])
  }

}


