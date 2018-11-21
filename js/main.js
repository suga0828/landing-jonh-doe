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

      setTimeout( () => {
        swal({
          type: 'error',
          title: 'This page is currently being updated',
          footer: '<a href="https://suga0828.github.io/suga0828">Do you want view a preview?</a>'
        })}, 2000)

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