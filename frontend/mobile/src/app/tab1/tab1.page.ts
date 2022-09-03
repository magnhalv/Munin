import {Component, OnInit} from '@angular/core';
import {MemorySetsService} from '../services/memory-sets.service';
import {MemorySet} from '../dto/MemorySet';
import {RD} from '../dto/RD';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  memorySets: RD<MemorySet[]> = { status: 'NOT_ASKED'};

  constructor(private memorySetService: MemorySetsService, public auth: AuthService) {
    auth.isAuthenticated$.subscribe(r => console.log('is auth', r));
    auth.user$.subscribe(r => console.log('user', r));
    auth.error$.subscribe(err => console.log('err', err));
  }

  ngOnInit(): void {
    this.memorySets = { status: 'LOADING'};
    this.memorySetService.getMemorySets().subscribe(r => {
      this.memorySets = r;
    });
  }

}
