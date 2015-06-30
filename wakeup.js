$(document).ready(function (){

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var leftlabels = $('<div class="left-labels"></div>');
	var clockscreen = $('<div class="clock-screen"></div>');
	var indicator = $('<div class="indicator"></div>');
	var clocktext = $('<div class="clock-text>"4:15"</div>');
	var bottomlabels = $('<div class="bottom-labels></div>');

	outerShell.append(innerShell);
	$('.container').append(outerShell);
	$(innerShell).append(clockscreen);

})