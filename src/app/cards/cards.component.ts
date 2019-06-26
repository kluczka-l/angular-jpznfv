import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
kard1 = { title: 'App 1 Title',
          subTitle: 'App 1 Sub Title',
          imageText: 'App 1 Image Text',
          imageUrl: "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/ripples.jpg?raw=true",
          footer: "App 1 Footer" };

kard2 = { title: 'App 2 Title',
          subTitle: 'App 2 Sub Title',
          imageText: 'App 2 Image Text',
          imageUrl: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
          footer: "App 2 Footer" };

  constructor() { }

  ngOnInit() {
  }

}