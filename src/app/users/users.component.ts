import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Users, AppError } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  users: Users[];
  errorMessage: AppError;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe({
        next: (data: Users[]) => this.users = data,
        error: (err: AppError) => this.errorMessage = err
      });
  }

}
