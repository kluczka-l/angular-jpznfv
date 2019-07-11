import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple} from '@angular/material';

@Component({
  selector: 'app-material-ripple-demo',
  templateUrl: './material-ripple-demo.component.html',
  styleUrls: ['./material-ripple-demo.component.css']
})
export class MaterialRippleDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @ViewChild(MatRipple , {static: false}) ripple: MatRipple;

  rippleColor: string = "green";

  triggerRipple() {
    this.ripple.launch({centered: true});
  }
}