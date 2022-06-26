import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8000/api/users/?format=json'
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.url);
  }
}
