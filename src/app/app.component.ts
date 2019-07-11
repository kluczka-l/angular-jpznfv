import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  minimalOptions = [
    { name: 'HOME', link: '/', icon: 'home', disabled: false, subs: [ 'Option 1' ] },
    { name: 'NEWS', link: '', icon: 'event_note', disabled: true, subs: [ 'Option 1', 'Option 2' ] },
    { name: 'CREATIVITY', link: '', icon: 'shutter_speed', disabled: true, subs: [ 'Option 1', 'Option 2', 'Option 3' ] },
    { name: 'IMPACT', link: '', icon: 'local_pharmacy', disabled: true, subs: [ 'Option 1', 'Option 2', 'Option 3' ] },
    { name: 'UTILITIES', link: '/utilities/aoi/create', icon: 'bug_report', disabled: false, subs: [ 'Option 1', 'Option 2' ] },
    { name: 'SUBSCRIBE', link: '', icon: 'unsubscribe', disabled: true, subs: [ 'Option 1' ] },
    { name: 'DEMO', link: '/demos', icon: 'more_horiz', disabled: false, subs: [ 'Option 1' ] }
  ];
 
    topbarImageUrl = "https://lockheedmartin.com/content/dam/lockheed-martin/general/LM-logo.svg";
  
  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
}