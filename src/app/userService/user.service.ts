import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  loginAuthentication(data) {
    alert(data.email);
    let url: string = "http://localhost:8080/picasa/rest/session/login";
    return this.http.post(url, data).map(response => response.json());
  }

  addNewUser(data) {
    let url: string = "http://localhost:8080/picasa/rest/session/signup";
    return this.http.post(url, data).map(response => response.json());
  }
}
