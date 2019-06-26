import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
kard1 = { title: 'Card 1 Title',
          subTitle: 'Card 1 Sub Title',
          imageText: 'Card 1 Image Text',
          imageUrl: "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true",
          footer: "Card 1 Footer" };

kard2 = { title: 'Card 2 Title',
          subTitle: 'Card 2 Sub Title',
          imageText: 'Card 2 Image Text',
          imageUrl: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
          footer: "Card 2 Footer" };

  constructor() { }

  ngOnInit() {
  }

}