import {Component} from 'angular2/core';
@Component({
    selector: 'my-settings',
    templateUrl: 'app/settings/settings.html'
})
export class SettingsComponent { 
  public myObject;
  constructor() {
	  var test = chrome.extension.getBackgroundPage().test;
	  console.log(test);
	  this.myObject = test;
  }
  
}