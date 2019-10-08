import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Posts } from './post';
import { AppError, Comments } from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.url}/posts`)
    .pipe(
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getPost(id: number): Observable<Posts> {
    return this.http.get<Posts>(`${this.url}/posts/${id}`)
    .pipe(
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getComments(postId: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.url}/comments/?postId=${postId}`)
    .pipe(
      // tap(data => console.log(data)),
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
