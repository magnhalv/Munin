import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivatedRoute, Router} from '@angular/router';
import config from 'capacitor.config';
const redirectUri = `${config.appId}://heimdall-local.eu.auth0.com/capacitor/${config.appId}/callback`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  public url = redirectUri;

  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) {
    auth.isAuthenticated$.subscribe(isAuth => {
      console.log('is auth', isAuth);
      if (isAuth) {
        void router.navigate(['tabs/learn'], { relativeTo: this.route });
      }
    });
    auth.user$.subscribe(r => console.log('user', r));
    auth.error$.subscribe(err => console.log('err', err));
  }

  ngOnInit() {}

}
