import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() siteName: string;

  bannerImageUrl = "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true";

  constructor() { }

  ngOnInit() {
  }

}