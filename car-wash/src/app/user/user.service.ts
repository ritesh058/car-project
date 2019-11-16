import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseHttpCallService } from 'src/app/shared/database-http-call.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public router:Router,private databaseCall:DatabaseHttpCallService) { }
  
  serviceProviderSignIn(){
    this.router.navigate(['/serviceprovider'])
  }





}
