import { Component, OnInit, Input } from '@angular/core';

import { Kard } from '../kard';

@Component({
  selector: 'kard',
  templateUrl: './kard.component.html',
  styleUrls: ['./kard.component.css']
})
export class KardComponent implements OnInit {
  @Input() kard: Kard;

  constructor() { 
  }

  ngOnInit() {
  }

}