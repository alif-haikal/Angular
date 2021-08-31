import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isUserLoggedIn : boolean = false;


  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService ) {
    // console.log("constructor : "+this.isUserLoggedIn);
  }

  ngOnInit() {

    // console.log("onInit : "+this.isUserLoggedIn);
    // return (this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn());
  }

}
