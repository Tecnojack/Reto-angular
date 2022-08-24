
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})




@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }
  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;
    return this.http.get<User>(url);
  }
  getAllUsers() {
    const url = `https://api.github.com/users`;
    return this.http
      .get<User>(url)
      .toPromise()
      .then((data) => data);
  }

}
