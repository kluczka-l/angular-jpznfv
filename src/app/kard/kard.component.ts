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
    this.subTitle = "STx";
    this.imageText = "Ix";
  }

  ngOnInit() {
  }

}