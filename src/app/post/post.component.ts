import { Component, OnInit } from '@angular/core';
import { AppError } from '../users/users';
import { Posts } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  posts: Posts[];
  errorMessage: AppError;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe({
        next: (data: Posts[]) => this.posts = data,
        error: (err: AppError) => this.errorMessage = err
      });
  }
}


