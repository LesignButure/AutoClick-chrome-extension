$(function(){

 	var secondIframe = document.getElementsByTagName('iframe')[1];
   	if(secondIframe != null){
		var frameDoc = secondIframe.contentDocument || secondIframe.contentWindow.document;
		var btn = frameDoc.getElementById("wscontinue");
		var trigger = document.createEvent("Event");
		trigger.initEvent("click", true, true);
		btn.dispatchEvent(trigger);
	}

/*
var s = document.createElement('script');
s.src = chrome.extension.getURL('test.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
*/

});