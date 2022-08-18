import { GithubService } from 'src/app/services/github-service';
import { Component, Input, OnInit } from '@angular/core';
import { AllUser } from 'src/app/models/allUsers.model';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  result: any;
  followers: any;
  name: any;
  chart: any = [];

  constructor() { }
  @Input() users: AllUser;
  ngOnInit() {

  };
};

