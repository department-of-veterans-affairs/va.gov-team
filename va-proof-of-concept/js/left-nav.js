$(document).ready(function() {
    //Any list item with a UL child is given the class "head"
    //This is performed by checking every LI and seeing if there is a child UL within it
    $('.accordion li').each(function() {
        $this = $(this);
        if($this.children('ul').length>0) {
           $this.addClass('head');
        }
	$('.sub-menu li:last-child').addClass('lastChild'); //Fix for IE borders only
	$('.sub-sub-menu li:first-child').addClass('firstChild'); //Fix for IE borders only

     //add initial arrows
	 if($this.hasClass('head')) {
           $('.accordion li > a span').empty().append('<img src="img/closed.png" title="Closed Arrow" alt="Closed Arrow" >');
           $('.sub-menu li > a span').empty().append('<img src="img/sub-closed.png" title="Closed Arrow" alt="Closed Arrow" >');
           $('.sub-sub-menu li > a span').empty().append('<img src="img/sub-closed.png" title="Closed Arrow" alt="Closed Arrow"  >');
	 };
    });

    //Set keyboard interface
    $('.accordion a').focus(function() {
	$(this).addClass('menufocus');
    });
    $('.accordion a').blur(function() {
	$(this).removeClass('menufocus');
    });



   //Set initial speed for slide animation
   $speed = 300;


   //When an anchor within list item with class "head" is clicked
   $('.accordion li.head > a').on('click', function(e) {
		e.preventDefault(); //Prevent the hyperlink from kicking in
		$parent = $(this).parent();
		$siblings = $(this).parent().siblings();

		//Close arrows on all other sibling menu items
		if($parent.parent().hasClass('accordion')){
			$siblings.find('span').empty().append('<img src="img/closed.png" title="Closed Arrow" alt="Closed Arrow" >');
			$siblings.find('ul').find('span').empty().append('<img src="img/sub-closed.png" title="Closed Arrow" alt="Closed Arrow" >');
		}
		else {
			$siblings.find('span').empty().append('<img src="img/sub-closed.png" title="Closed Arrow" alt="Closed Arrow" >');
		};

		//hide all sibling menu and sub-menu items
		$siblings.find("ul ul").hide();
		$siblings.find('ul').slideUp(200);

		//Reset all other elements
		$siblings.removeClass('active');
		$siblings.find('li').removeClass('active');

		//Toggle selection open/closed
		$parent.toggleClass('active');

		$parent
			.find('ul').first()
                .stop(true,true) //Clear any queue
                .slideToggle($speed); //Toggle the slide

		//Toggle arrow for selection open/closed
        if($parent.hasClass('active')) {
			if($parent.parent().hasClass('accordion')){
				$(this).find('span').first().empty().append('<img src="img/open.png" title="Open Arrow" alt="Open Arrow" >');
			}
			else {
               $(this).find('span').first().empty().append('<img src="img/sub-open.png" title="Open Arrow" alt="Open Arrow" >');
			};
        }
        else {
            if($parent.parent().hasClass('accordion')){
				$(this).find('span').first().empty().append('<img src="img/closed.png" title="Open Arrow" alt="Closed Arrow" >');
	    }
            else {
               $(this).find('span').first().empty().append('<img src="img/sub-closed.png" title="Open Arrow" alt="Closed Arrow">');
	    };
	    $parent.removeClass('active');
        }
;

	// collapse main menu for mobile
	(!device.isDesktop) && $('#nav-wrap').find('.accessible-megamenu-top-nav-item > h2 a.active').removeClass('active').parent().next('.accessible-megamenu-panel').slideUp(200);

    });


	//Expand menu to current page at load


	var urlPage = window.location.pathname;
	if(urlPage.match(/\/$/)) {
		urlPage = urlPage + "index.asp";    //Add index.asp to all urls that end with a slash
	};
	var urlPagei = new RegExp(urlPage,'i');

	//Check if the current page is a homepage
	$pageType = $("meta[name=type]");
	if(($pageType.length) != 0) {
		$pageType = $pageType.attr("content").toLowerCase();
	};

	//If not a homepage, expand nav to show current page
	if($pageType != "homepage") {
		$speed = 0;
		$match = "false";
		$('#leftNav a').each(function() {
			if ($(this).attr('href').replace(location.origin,'').match(urlPagei)) {
				$match = "true";
	        		$(this).parents('li.head').children('a').trigger('click');
        			$(this).addClass('current');
				return false;
			};
		});
		$('#leftNav a').each(function() {
			if ($match == "false") {
				var indexPage = 'index.asp';
				var urlIndex = urlPage.replace(urlPage.substring(urlPage.lastIndexOf('/')+1), indexPage);
				urlIndexi = new RegExp(urlIndex,'i');
				if ($(this).attr('href').replace(location.origin,'').match(urlIndexi)) {
	        			$(this).parents('li.head').children('a').trigger('click');
					return false;
				};
			};
		});
		$speed = 300;
	};

});
