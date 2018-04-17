$(document).ready(function() {
  // Handler for .ready() called.
  $(document).foundation();

  //
  var topbar = jQuery(".top-bar");
	var headerScroll = "header-scrolled";
	
	jQuery(document).scroll( function() {
		if(jQuery(this).scrollTop() > 30) {
				
		    topbar.addClass(headerScroll);

		}
		else {

		    topbar.removeClass(headerScroll);
								
		}
  });
});

