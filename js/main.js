$(document).ready(function(){

		$('.scrollspy').scrollSpy({
			scrollOffset : 0,
 		    throttle : 100, //-> scrollspy throttling.
		});
    	$(".button-collapse").sideNav();
    	$('.parallax').parallax();
    	$('.close').click(function() {
    		// Hide sideNav
  			$('.button-collapse').sideNav('hide');
    	});

  	});

new WOW().init();

function calculo() 
{
	var altura = jQuery(".portafolio").height() + 60;

   	jQuery(".parallax-container").height(altura);
   	jQuery(".portafolio").css("margin-top", -altura);
}

jQuery(document).ready(calculo());

window.addEventListener("resize", calculo);