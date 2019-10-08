import { Component, OnInit } from '@angular/core';
import { AppError, Comments } from 'src/app/users/users';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../post';
import { post } from 'selenium-webdriver/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styles: []
})
export class PostdetailComponent implements OnInit {
  post: Posts;
  comments: Comments[];
  errorMessage: AppError;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.post = data['postdetail'];
    });
  }

  getComments() {
    this.postService.getComments(this.post.id)
      .subscribe({
        next: (data: Comments[]) => this.comments = data,
        error: (err: AppError) => this.errorMessage = err
      });
  }

}
