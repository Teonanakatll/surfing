import Swiper from "swiper"

import {animate, map} from "./gsap-test"
import { setBackgrounds } from "./set-background"
import { quantity } from "./quantity"

import {EffectCube, EffectFade, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {

	const swiperDots = new Swiper('.slider-dots', {
		modules: [Controller],
		// mousewheel: {
		// 	invert: true,
		// },
		slidesPerView: 4,
		spaceBetween: 40,
		slideToClickedSlide: true,
		// autoplay: true,
		// loop:	true,
		speed: 1500,
	})

	const swiperTop = new Swiper('.header__slider', {
		modules: [Mousewheel, Navigation, EffectFade, Thumbs],
		// autoplay: {
		// 	delay: 1000,
		// },
		thumbs: {
			swiper: swiperDots,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		// pagination: {
		// 	el: '.header__slider-pagination',
		// 	clickable: true,
		// },
		mousewheel: {
			invert: true,
		},
		// centeredSlides: true,
		loop: true,
		speed: 1500,
	});

	const swiperMap = new Swiper('.slider-map', {
		slidesPerView: 8,
		slideToClickedSlide: true,
	})

	const swiperSurf = new Swiper('.surf-slider', {
		modules: [Mousewheel, Navigation, Thumbs],
		// mousewheel: {
		// 	invert: true,
		// },
		thumbs: {
			swiper: swiperMap,
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		centeredSlides: true,
		slidesPerView: 4,
		speed: 1500,
		spaceBetween: -50,
		loop: true,
		slideToClickedSlide: true,
	})

	const swiperTravel = new Swiper('.holder__slider', {
		modules: [Mousewheel, Navigation, Parallax],
		mousewheel: {
			invert: true,
		},
		loop: true,
		speed: 2000,
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		parallax: true,
	})

	// swiperTop.controller.control = swiperDots
	// swiperDots.controller.control = swiperTop

	// функция анимации крупных элементов хэдера
	animate();

	// функция анимации карты
	map();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	// setBg();
	setBackgrounds();

	// скрипт обработки инпутов
	quantity()

})
