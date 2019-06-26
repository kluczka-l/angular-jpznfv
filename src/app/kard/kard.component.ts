import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kard',
  templateUrl: './kard.component.html',
  styleUrls: ['./kard.component.css']
})
export class KardComponent implements OnInit {
@Input() title: string;
@Input() subTitle: string;
@Input() imageText: string;
@Input() imageUrl: string;
@Input() footer: string;

  constructor() { 
    this.title = "Tx";
    this.subTitle = "STx";
    this.imageText = "Ix";
    this.imageUrl = "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true"
    this.title = "Fx";
  }

  ngOnInit() {
  }

}