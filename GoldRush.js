$(document).ready(function(){

	$('body').on( "click", function(event) {
  		var coordinatesX = event.pageX;
  		var coordinatesY = event.pageY;

  	 	console.log(
    	    "pageX/Y: " +
    	    event.pageX + ", " +
    	    event.pageY
        );

  		$('body').append('<div class="container"><img class="marker" src="http://sr.photos3.fotosearch.com/bthumb/CSP/CSP666/k6660545.jpg"></div>');
		
		$('.container').last().css({ 'top' : coordinatesY , 'left' : coordinatesX });

	});

	$('body').on('click', '.container', function() {
		$(this).remove();
		// console.log('test');
	});
	
  		
});