import { Component, OnInit } from '@angular/core';
import SampleJson from "../../../assets/config.json";
import SampleJsonFromGithub from "https://github.com/kluczka-l/angular-jpznfv/blob/master/src/assets/config.json";

//REFERENCE https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/#reading-local-json-files-in-angular-7-and-angular-6-1

@Component({
  selector: 'app-read-json-demo',
  templateUrl: './read-json-demo.component.html',
  styleUrls: ['./read-json-demo.component.css']
})
export class ReadJsonDemoComponent implements OnInit {

  constructor() {
    console.log('Reading local json files');
    console.log(SampleJson);
    console.log(SampleJsonFromGithub);
   }

  ngOnInit() {
  }

}