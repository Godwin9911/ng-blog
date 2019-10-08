import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostComponent,
    PostdetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ]
})
export class PostModule { }
