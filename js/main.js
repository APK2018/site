$('.burger').click(function(event) {
	$('.menu-burger').slideToggle('slow')
	$('.pod-after').toggleClass('first');
	$('.pod').toggleClass('middle');
	$('.pod-before').toggleClass('last');
})