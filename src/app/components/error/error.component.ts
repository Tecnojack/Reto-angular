import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
