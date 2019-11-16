import { Component, OnInit } from '@angular/core';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-older-history',
  templateUrl: './user-older-history.component.html',
  styleUrls: ['./user-older-history.component.css','../../shared/shared.css']
})
export class UserOlderHistoryComponent implements OnInit {
  allBookingHistory;loadSpinner:boolean=false;errorMesg:String;

  constructor(public databaseCall:DatabaseHttpCallService,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }


    this.loadSpinner=true;
    this.databaseCall.getData('usercarbookinghistory').subscribe((res:any)=>
    {
      this.loadSpinner=false;
      this.allBookingHistory=res.data;
    },error=>{
      this.loadSpinner=false;
      if (error.error) {
        if (error.error.err) {
          this.errorMesg = "User Id and Password doesnot match"
        }
      }
      else
        this.errorMesg = "Technical Error...Contact service provider"

    })
  }

  showBookingHistory(){
    console.log(this.allBookingHistory)
  }

  detailedBooking(id){
    if(id){
      this.router.navigate(['/user/userdashboard/eachbookinghistory'],{queryParams:{_id:id}})
    }
    // this.databaseCall.getData()
  }

}
