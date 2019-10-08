import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Injectable({ providedIn: 'root' })

export class UserDetailResolver implements Resolve<Users> {

  constructor(private userService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Users> | Promise<Users> | Users {
    const id = route.paramMap.get('id');
    return this.userService.getUser(+id);
  }
}
