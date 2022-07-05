import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  saveUser(user:Object):Observable<Object>
  {
    return this.http.post(`http://localhost:9095/estore/usercontroller/registerUser`,user);
  }

  login(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/ims/usercontroller/userlogin`,user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
