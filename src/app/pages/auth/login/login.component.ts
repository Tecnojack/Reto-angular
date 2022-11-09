import { GeneralService } from './../../../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private generalSvc: GeneralService) {
    this.generalSvc.setHeader(false);
  }

  ngOnInit(): void {
  }

}
