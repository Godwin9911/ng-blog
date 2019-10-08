import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Posts } from '../post';
import { PostService } from '../post.service';

@Injectable({ providedIn: 'root' })

export class PostDetailResolver implements Resolve<Posts> {

  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Posts> | Promise<Posts> | Posts {
    const id = route.paramMap.get('id');
    return this.postService.getPost(+id);
  }
}
