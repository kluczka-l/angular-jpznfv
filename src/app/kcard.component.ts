import { Component, Input } from '@angular/core';

@Component({
  selector: 'k_card',
  template: `<h1>{{cardTitleType}}</h1>
  
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class KCardComponent  {
  @Input() cardTitleType: string;
 
 
  kCardTitle = "K Card";

  update(val : string) {
    this.cardTitleType = val;
    console.log("From KCardComponent: " + this.cardTitleType)
  if ( this.cardTitleType == "basic" ) {
  this.kCardTitle = "Title Type basic";
  } else {
    this.kCardTitle = "Title Type not basic";
  }

  }
}
