import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css', '../../shared/shared.css']
})
export class UserHeaderComponent implements OnInit {
  userLoggedIn;
  status: boolean = false;

  constructor(private router: Router, private databaseCall: DatabaseHttpCallService) {
    this.userLoggedIn = localStorage.getItem("userName")
  }

  ngOnInit() {
  }

  userDashboard() {
    this.router.navigate(["user/userdashboard"])
  }

  showHideDiv() {
    this.status = !this.status;
  }
  hideSelection() {
    this.status = false;
    this.router.navigate(["user/userdashboard/userEdit"])
  }

  userLogout() {

    this.databaseCall.updateDocument('logout').subscribe(response => {
      localStorage.clear();
      this.router.navigate(["/user"]);
    }
      , error => console.log(error))

  }
}
