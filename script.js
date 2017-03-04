// TODO: Use a function closure and release global $
$(document).ready(function() {
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
	$('#forum').on('submit', function(e){
		e.preventDefault();
		alert('Thank you for submitting!');
		});
});