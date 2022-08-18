import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  constructor() { }
  @Input() user: User;
  ngOnInit() {
    console.log(this.user);
  }

}
