import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserDetailResolver } from './userdetail/userdetail-resolver.service';


const routes: Routes = [
  { path: 'profiles', component: UsersComponent },
  { path: 'profile/:id', component: UserdetailComponent,
                          resolve: { userdetail: UserDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
