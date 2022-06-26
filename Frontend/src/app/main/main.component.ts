import { Component, OnInit } from '@angular/core';
import { RestService } from "../services/rest.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users: any

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
