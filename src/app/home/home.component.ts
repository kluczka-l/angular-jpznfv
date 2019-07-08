import { Component, Input, OnInit } from '@angular/core';

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