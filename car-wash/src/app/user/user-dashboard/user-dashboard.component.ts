import { Component, OnInit } from '@angular/core';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css', '../../shared/shared.css']
})
export class UserDashboardComponent implements OnInit {


  constructor(private databaseCall: DatabaseHttpCallService, private router: Router) {
    

  }

  ngOnInit() {
    if(!localStorage.getItem("userName")){
      this.router.navigate(['/user'])
    }


  }

}
