import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users, AppError} from './users';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/users`)
    .pipe(
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<Users> {
    return this.getUsers()
    .pipe(
      // tap(data => console.log(data)),
      map((users: Users[]) => users.find(user => user.id === id)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse ) {
    const dataErr = new AppError();
    dataErr.statusText = err.statusText;
    dataErr.message = err.error.message;
    return throwError(dataErr);
  }
}



