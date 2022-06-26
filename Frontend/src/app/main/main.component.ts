import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users: any

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
