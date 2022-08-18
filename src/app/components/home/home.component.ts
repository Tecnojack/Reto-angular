import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../models/user.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { GithubService } from 'src/app/services/github-service';
import { AllUser } from 'src/app/models/allUsers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  allUsers: AllUser;
  findControl = new FormControl();
  error: boolean = false;
  user: User = null;
  all = true;
  ngOnInit() {
    this.githubService.getAllUsers().then(users => {
      this.allUsers = users;
      console.log(this.allUsers)
    });

    this.findControl.valueChanges
      .pipe(filter(value => value.length > 3),
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getUser(value).pipe(
            catchError(err => {
              this.user = null;
              this.error = true;
              this.all = false
              return EMPTY;
            })))

      ).subscribe(user => {
        this.all = false
        this.user = user;
        this.error = false;
      });

  }




}

