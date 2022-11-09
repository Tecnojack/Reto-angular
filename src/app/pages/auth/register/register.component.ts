import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private generalSvc: GeneralService) {
    this.generalSvc.setHeader(false);
  }
  ngOnInit(): void {
  }

}
