import {Component, OnInit} from '@angular/core';
import {MemorySetsService} from '../services/memory-sets.service';
import {MemorySet} from '../dto/MemorySet';
import {RD} from '../dto/RD';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  memorySets: RD<MemorySet[]> = { status: 'NOT_ASKED'};

  constructor(private memorySetService: MemorySetsService) {}

  ngOnInit(): void {
    this.memorySets = { status: 'LOADING'};
    this.memorySetService.getMemorySets().subscribe(r => {
      this.memorySets = r;
    });
  }

}
