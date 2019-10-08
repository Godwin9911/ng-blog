import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';
import { Posts } from './post';

@Injectable({ providedIn: 'root' })

export class PostResolver implements Resolve<Posts[]> {

  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Posts[]> | Promise<Posts[]> | Posts[] {
    return this.postService.getPosts();
  }
}
