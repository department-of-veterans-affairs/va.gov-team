<!-- This JavaScript snippet activates those tabs -->

// perform JavaScript after the document is scriptable.
$(function() {
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$("#tab-accord").tabs("#tab-accord div.pane",{
		tabs:'.tab a',
		onClick: function(){
			//device.isMobile && $(window).scrollTop(this.getCurrentTab().offset().top);
		}		
	});
});

function tabAccord(ta){
	var ta = $(ta),
		tab = ta.find('.tab'),
		pane = ta.find('.pane');
		
	if(device.isMobile){
		tab.each(function(i){
			$(this).after(pane.eq(i));
		});
	}
	else{
		pane.appendTo(ta);
	}
}
$(function(){
	tabAccord("#tab-accord");
	$(window).resize(function(){
		tabAccord("#tab-accord");
	});
})
