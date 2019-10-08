import { Component, OnInit } from '@angular/core';
import { Users, AppError, Comments} from '../users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styles: []
})
export class UserdetailComponent implements OnInit {
  lat = -37.3159;
  lng = 81.1496;
  user: Users;
  errorMessage: AppError;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['userdetail'];
    });
  }

}
