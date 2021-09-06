import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'xpokkax';
  password: string = 'Admin@123';
  errorMessage: string = 'Invalid Credentials';
  flag: boolean = false;

  constructor(private router: Router, private hardcodedAutheticateService: HardcodedAuthenticationService, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {

  }

  handleLogin() {
    if (this.hardcodedAutheticateService.authenticate(this.username,this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.flag = false;
      },
      error => {
        console.log(error);
        this.flag = true;
      }
    )
  }
}
