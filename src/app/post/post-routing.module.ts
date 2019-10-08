import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostDetailResolver } from './postdetail/postdetail-resolver.service';


const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'postdetail/:id', component: PostdetailComponent,
                            resolve: { postdetail: PostDetailResolver }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
