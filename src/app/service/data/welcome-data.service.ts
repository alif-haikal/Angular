import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// export class HelloWorldBean{
//   constructor(public message:string){}
// }

/**/


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(name:string){

    // return this.http.get<HelloWorldBean>('http://localhost:8080/hello/haikal');
    // return this.http.get('http://localhost:8080/hello/haikal');

    let basicAuthentication = this.createBasicAuthenticationHttpHeader()
    let headers = new HttpHeaders({
      Authorization:basicAuthentication

    });
    return this.http.get(`http://localhost:8080/hello/${name}`,{headers});

  }

  executeHelloWorldBeanServiceWithPathVariable(name:string){

    let basicAuthentication = this.createBasicAuthenticationHttpHeader()
    let headers = new HttpHeaders({
      Authorization:basicAuthentication

    });
    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});

  }

  createBasicAuthenticationHttpHeader(){
    let username='pokka92';
    let password='Admin@123';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }



}
