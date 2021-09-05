import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): boolean {
    if (username === 'xpokkax' && password === 'Admin@123') {
      sessionStorage.setItem('username', username);
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
    same definition but much shorter
    if (username === null){
      return false;
    } else {
      return true;
    }*/
    return !(username === null);
  }

  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString

    });
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers }).pipe(map(response => { sessionStorage.setItem('authenticatedUser', username); return response; }));

  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}
