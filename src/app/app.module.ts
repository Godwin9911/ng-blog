import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: UsersComponent },
      { path: 'profiles', redirectTo: 'profiles', pathMatch: 'full' },
      { path: '**', component: UsersComponent }
    ], {scrollPositionRestoration: 'enabled'}),
    UsersModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
