import { Component, Input, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() siteName: string;
  localSidenavOpened = true;
  highlightColor: string;
  displayDemoStuff = false;
  showSad: boolean = false;
  heroes = heroes;

  constructor() { }

  ngOnInit() {
  }

  showDemoStuff() {
    this.displayDemoStuff = true;
  }
  hideDemoStuff() {
    this.displayDemoStuff = false;
  }

}