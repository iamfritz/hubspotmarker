(function() {

	var layout = $('.layout-tree-container');

	var layout_row = $('.row.widget-row', layout);
	if(section == 'header') {
		//_layoutrow = 0;
		var row = $('.row.widget-row:eq(0)', layout);
		row.css('background-color','#33475b');
	} else if(section == 'body') {
		//_layoutrow = 2;
		var row = $('.row.widget-row:eq(2)', layout);
		row.css('background-color','#6086ab');		
	} else if(section == 'footer') {
		//_layoutrow = 4;
		var row = $('.row.widget-row:eq(4)', layout);
		row.css('background-color','#35516d');		
	} else if(section == 'all') {
		//_layoutrow = '0,2,4';
		$('.row.widget-row:eq(0)', layout).css('background-color','#33475b');
		$('.row.widget-row:eq(2)', layout).css('background-color','#6086ab');		
		$('.row.widget-row:eq(4)', layout).css('background-color','#35516d');		
	}
	
	jQuery('.ide-command-bar').append('<div class="hubrise"><button class="hubrise-button private-button"><span class="rise-icon">Rise</span></button></div>');

})();