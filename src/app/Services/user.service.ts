import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: String = 'https://coodyexpert-morse.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }
  login(formData){
    return this.http.post<User>(`${this.apiURL}/login`, formData)
  }
}
