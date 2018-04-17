$(document).ready(function() {
  // Handler for .ready() called.
  $(document).foundation();
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".top-bar").css("background-color" , "#333");
	  }

	  else{
		  $(".black").css("background-color" , "rgba(0, 0, 0, .5)");  	
	  }
  })
})