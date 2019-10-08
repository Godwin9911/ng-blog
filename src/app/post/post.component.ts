import { Component, OnInit } from '@angular/core';
import { AppError } from '../users/users';
import { Posts } from './post';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  posts: Posts[];
  errorMessage: AppError;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.posts = data['post'];
    });
  }
}


