import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8182/employeeapi/employeeList',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
  //  let user = sessionStorage.getItem('username')
  let isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn')
    console.log(isUserLoggedIn === "true")
    return (isUserLoggedIn === "true")
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('isUserLoggedIn')
  }
}
