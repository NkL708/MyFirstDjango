import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RestService {

  private usersUrl = 'http://127.0.0.1:8000/api/users/'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersUrl)
  }
}
