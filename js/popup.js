'use strict';


/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "red"; document.body.innerHTML = "Some new HTML content";' });
});*/

chrome.tabs.query(
  {
    active: true,
    currentWindow: true
  },
  ([currentTab]) => {
    const url = new URL(currentTab.url);
    const domain = url.hostname;
    if(domain != 'app.hubspot.com') {
    	// disabled
    	document.getElementById('modal-icons').remove();
    }
  }
);

chrome.tabs.onUpdated.addListener(function (tab) {
    var tabUrl = tab.url;
    alert(tabUrl);
});

chrome.tabs.onCreated.addListener(function (tab) {
    var tabUrl = tab.url;
    alert(tabUrl);
    
});


jQuery(document).ready(function () {

	jQuery('.chrome_action').click(function(){
		var _section = jQuery(this).attr('data-section');
		if(_section == 'all') {
			jQuery('.chrome_action').addClass('sectionmark');
		} else {
			jQuery(this).addClass('sectionmark');
		}
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		
			chrome.tabs.executeScript({
			    code: "var section = '"+_section+"';"
			}, function () {
			    chrome.tabs.executeScript(tabs[0].id,{
			        file: "js/inject.js"
			    });
			});

		});

	});


});