import { Component, Input } from '@angular/core';

@Component({
  selector: 'k_card',
  template: `<h1>{{k_card_title}}</h1>
  <p>hello</p>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class KCardComponent  {
  @Input() k_card_type: string;
  k_card_title: string;
  k_card_title = "K Card";

  selectCard() {
  if ( k_card_type == "basic" ) {
  k_card_title = "x";
  } else {
    k_card_title = "y";
  }
  }
}
