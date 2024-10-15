import Swiper from "swiper"

import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

import LocomotiveScroll from 'locomotive-scroll'

import {animate, map} from "./gsap-test"
import { setBackgrounds } from "./set-background"
import { quantity } from "./quantity"

import {EffectCube, EffectFade, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {

	const locoScroll = new LocomotiveScroll({
		lenisOptions: {
			el: document.querySelector("body"),
			duration: 1.7,
			smooth: true,
		},
	})


	const swiperDots = new Swiper('.slider-dots', {
		modules: [Controller],
		// mousewheel: {
		// 	invert: true,
		// },
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			}
		},
		slideToClickedSlide: true,
		// autoplay: true,
		// loop:	true,
		speed: 1500,
	})

	const swiperTop = new Swiper('.header__slider', {
		modules: [Navigation, EffectFade, Thumbs],
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
		// centeredSlides: true,
		loop: true,
		speed: 1500,
	});

	swiperTop.on('slideChange', function() {
		let currentSlide = swiperTop.realIndex + 1

		let dotSelector = `.dot-${currentSlide}`
		let lineSelector = `.line-animation-${currentSlide}`
		let titleSelector = `.title-${currentSlide}`

		let dot = document.querySelector(dotSelector)
		let line = document.querySelector(lineSelector)
		let title = document.querySelector(titleSelector)
		// console.log(lineSelector)

		map(dot, line, title)
	})

	const swiperMap = new Swiper('.slider-map', {
		slidesPerView: 8,
		slideToClickedSlide: true,
	})

	const swiperSurf = new Swiper('.surf-slider', {

		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: swiperMap,
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		centeredSlides: true,
		slidesPerView: 2,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3.2,
			},
			576: {
				slidesPerView: 2.5,
			},
		},
		spaceBetween: -50,
		speed: 1500,
		loop: true,
		slideToClickedSlide: true,
	})

	const swiperTravel = new Swiper('.holder__slider', {
		modules: [Navigation, Parallax],
		loop: true,
		speed: 2000,
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		parallax: true,
	})

	const swiperShop = new Swiper('.shop__slider', {
		modules: [Navigation, Parallax],
		loop: true,
		speed: 2000,
		slidesPerView: 1,
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		parallax: true,
	})


	$('.surfboard-box__circle').on('click', function() {
		$(this).toggleClass('active');
	})

	$('.menu-btn__inner').on('click', function() {
		$('.menu-btn').toggleClass('active');
		$('.menu').toggleClass('active');
	})

	// swiperTop.controller.control = swiperDots
	// swiperDots.controller.control = swiperTop

	// функция анимации крупных элементов хэдера
	animate();

	// функция анимации карты
	map();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

	// скрипт обработки инпутов
	quantity();



})
