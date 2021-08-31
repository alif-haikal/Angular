import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {

    // console.log("before : " + this.isUserLoggedIn());

    if (username === 'xpokkax' && password === 'Admin@123') {
      sessionStorage.setItem('username', username);
      // console.log("after : " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  logout(): boolean {
    if (sessionStorage.getItem('username') != null) {
      sessionStorage.removeItem('username');
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let username: string = sessionStorage.getItem('username');

    /*
    if (username === null){
      return false;
    } else {
      return true;
    }*/

    /*same definition but much shorter*/
    return !(username === null);
  }
}
