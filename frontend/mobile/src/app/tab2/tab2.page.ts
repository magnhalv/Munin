import { Component } from '@angular/core';
import {MemorySetsService} from '../services/memory-sets.service';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private memorySetService: MemorySetsService, public auth: AuthService) {
    auth.isAuthenticated$.subscribe(r => console.log('is auth', r));
    auth.user$.subscribe(r => console.log('user', r));
    auth.error$.subscribe(err => console.log('err', err));
  }

}
