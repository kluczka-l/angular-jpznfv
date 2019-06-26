import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kard',
  templateUrl: './kard.component.html',
  styleUrls: ['./kard.component.css']
})
export class KardComponent implements OnInit {
@Input() kardTitle: string;
@Input() kardSubTitle: string;
@Input() kardImageText: string;
@Input() kardImage: string;
@Input() kardFooter: string;



  constructor() { 
    this.kardSubTitle = "STx";
    this.kardImageText = "Ix";
  }

  ngOnInit() {
  }

}