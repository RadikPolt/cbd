
"use strict";
let menuBtn = document.querySelector('.ba-menu-toggle');
let menu = document.querySelector('.ba-nav');
let header = document.querySelector('.ba-header-wrap');

menuBtn.addEventListener('click', () => menu.classList.toggle('open'));

let tab = function () {
	let tabNav = document.querySelectorAll('.ba-tab'),
		tabContent = document.querySelectorAll('.ba-content'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});
	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-tab');
		console.log(tabName);

		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.id == tabName ? item.classList.add('active') : item.classList.remove('active');
		})
	}

}

tab();

const mainSlider = $('.ba-sliders');

mainSlider.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	variableWidth: true,
	nextArrow: '.ba-slider-btn__next',
	prevArrow: '.ba-slider-btn__prev',

	responsive: [
		
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
	
});