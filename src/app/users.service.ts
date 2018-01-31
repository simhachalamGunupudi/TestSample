import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class UsersService {
  private _getURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) {
  }


  getUserDetails(): Observable<any[]> {
    return this.http
      .get(this._getURL)
      .map((resp) => resp.json());
  }



}
