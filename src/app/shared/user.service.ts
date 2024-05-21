import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/json/users.json');
  }
  public getUserById(id: number): Observable<User> {
    return this.http
      .get<User[]>('assets/json/users.json')
      .pipe(
        map((users: User[]) => users.find((user) => user.id === id) || users[0])
      );
  }
}
