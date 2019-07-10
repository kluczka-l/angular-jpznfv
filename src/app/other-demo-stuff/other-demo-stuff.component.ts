import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '../hero';
@Component({
  selector: 'app-other-demo-stuff',
  templateUrl: './other-demo-stuff.component.html',
  styleUrls: ['./other-demo-stuff.component.css']
})
export class OtherDemoStuffComponent implements OnInit {
heroes = heroes;

  constructor() { }

  ngOnInit() {
  }

}