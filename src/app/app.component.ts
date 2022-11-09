import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeader;
  title = 'github-app';
  constructor(private generalSvc: GeneralService) {

  }
  ngOnInit(): void {
    const header = this.generalSvc.getHeader();
    this.showHeader = header === false ? header : true;
  }
}
