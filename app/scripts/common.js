$(function () {

	'use strict';

	// Code here
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			auto: true,
			minSlides: 1,
			maxSlides: 1,
			slideWidth: 940,
			nextSelector: ".slider-controls-next",
			prevSelector: ".slider-controls-prev",
			buildPager: function(slideIndex){
				switch(slideIndex){
					case 0:
						return '<img src="../../assets/images/slider/1.png">';
					case 1:
						return '<img src="../../assets/images/slider/2.png">';
					case 2:
						return '<img src="../../assets/images/slider/3.png">';
					case 3:
						return '<img src="../../assets/images/slider/4.png">';
					case 4:
						return '<img src="../../assets/images/slider/5.png">';
					case 5:
						return '<img src="../../assets/images/slider/6.png">';
				}
			}

		});

	$('.main-nav__link').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');});}

);});
