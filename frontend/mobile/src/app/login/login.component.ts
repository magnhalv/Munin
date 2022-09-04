import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) {
    auth.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        void router.navigate(['tabs/learn'], { relativeTo: this.route });
      }
    });
    auth.user$.subscribe(r => console.log('user', r));
    auth.error$.subscribe(err => console.log('err', err));
  }

  ngOnInit() {}

}
