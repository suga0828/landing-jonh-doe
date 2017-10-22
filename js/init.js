(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

	$(".page-loader").css( "display", "none")
	$('.scrollspy').scrollSpy({
		scrollOffset : 0,
 		throttle : 100, //-> scrollspy throttling.
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space