import {Component} from 'angular2/core';
@Component({
    selector: 'my-popup',
    templateUrl: 'app/popup/popup.html'
})
export class PopupComponent { 
	constructor() {
		var test = chrome.extension.getBackgroundPage().tryHi();
	}
}