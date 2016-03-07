import {Component} from 'angular2/core';
@Component({
    selector: 'my-conversation',
    templateUrl: 'app/conversation/conversation.html'
})
export class ConversationComponent { 
  public myObject;
  constructor() {
	  var test = chrome.extension.getBackgroundPage().test;
	  console.log(test);
	  this.myObject = test;
  }
  
}