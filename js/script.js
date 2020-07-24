$(document).ready(function () {
	$('.slider').slick({
		arrow: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		autoplay: true,
		centerMode: true,
		variableWidth: true
	});
});