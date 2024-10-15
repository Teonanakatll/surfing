import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function animate() {

	let itemsTitle = gsap.utils.toArray('.title')

	itemsTitle.forEach(item => {
		gsap.from(item, {
			x: -100,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: item,
				start: 'top 600px',
				end: 'top 150px',
				scrub: .5,
			}
		})
	})

	let itemsSubtitle = gsap.utils.toArray('.subtitle');
	itemsSubtitle.forEach(item => {
		gsap.from(item, {
			x: 100,
			opacity: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 650px',
				end: 'top 300px',
				scrub: .5,
			}
		})
	})

	let itemsInfo = gsap.utils.toArray('.holder-slider__info')
	itemsInfo.forEach(item => {

		let childs = gsap.utils.toArray(item.querySelectorAll('.holder-slider__info-item'));

		gsap.from(childs, {
			y: 200,
			opacity: 0,
			duration: 1,
			stagger: .5,  // задержка между дочерними элементами
			scrollTrigger: {
				trigger: item,
				start: 'top 75%',
				end: 'center 40%',
				onEnter: () => gsap.to(childs, {opacity: 1, y: 0, duration: 2, ease: "elastic.out", stagger: .5}),
				onLeaveBack: () => gsap.to(childs, {opacity: 0, y: 200, duration: 2, ease: "elastic.out", stagger: .5})
			},
		})
	})

	// слайдер surf
	let slides = gsap.utils.toArray('.surf-box').slice(1, 6);
	gsap.from(slides, {
		y: 200,
		opacity: 0,
		duration: 1,
		stagger: .7,
		ease: "elastic.out",
		scrollTrigger: {
			trigger: '.surf-slider',
			start: 'top 80%',
			end: 'top 20%',
			scrub: false,
			onEnter: () => gsap.to(slides, {y: 0, opacity: 1, duration: 1, stagger: .7, ease: "elastic.out"}),
			onLeaveBack: () => gsap.to(slides, {y: 200, opacity: 0, duration: 1, stagger: .7, ease: "elastic.in"})
		}
	})

	let mapCircles = gsap.utils.toArray('.slider-map__circle');

	let mapT = gsap.timeline({
		scrollTrigger: {
			trigger: '.slider-map',
			start: 'top 85%',
			end: '+=1100px',
			toggleActions: 'restart reverse restart reverse', // для повторной активации
		}
	})
	mapT
		.from('.slider-map', { scale: .1, opacity: 0, y: -100, duration: 1, ease: "bounce.out"})
		.from(mapCircles, { opacity: 0, scale: 0, duration: 1, stagger: .3, ease: "bounce.out"})
		.to(mapCircles, { 
      boxShadow: '0 0 35px rgba(74, 246, 205, .85), 0 0 35px rgba(110, 253, 0, .85)', 
      stagger: .5,
			repeat: -1,
      duration: .5, // Ускоряет смену стиля на каждый элемент
			ease: "bounce.out",
      clearProps: 'all' // Сбрасывает все временные стили после анимации
  	});


	gsap.from('.surf', {
		backgroundSize: '1%',
		scrollTrigger: {
			trigger: '.surf',
			start: 'top',
			end: 'bottom',
			onEnter: () => gsap.to('.surf', {backgroundSize: '5%', duration: 1, ease: "bounce.out"}),
			onLeaveBack: () => gsap.to('.surf', {backgroundSize: '7%', duration: 1, ease: "bounce.out"})
		}
	})

	// самолёт
	gsap.from('.holder-slider__descr', {
		backgroundPositionX: 200,
		opacity: 0,
		scrollTrigger: {
			trigger: '.holder-slider__descr',
			start: 'top center',
			end: 'top top',
			onEnter: () => gsap.to('.holder-slider__descr', {backgroundPositionX: 100,duration: 1.5, opacity: 1, ease: "circ.inOut"}),
			onLeaveBack: () => gsap.to('.holder-slider__descr', {backgroundPositionX: 200,duration: 1.5, opacity: 0, ease: "circ.inOut"})
		}
	})

	// анимация доски
	let surfboard = gsap.timeline({
		scrollTrigger: {
			trigger: '.surfboard',
			start: 'top 80%',
			end: 'top 20%',
			// markers: true,
			scrub: false,
			// toggleActions: 'restart reverse restart reverse',
			onEnter: () => {
										gsap.to('.surfboard', {y: 0, opacity: 1, duration: 1.5, ease: "bounce.out"}),
										gsap.to('.shop__extras', {delay: 1, x: 0, opacity: 1, duration: 1.5, ease: "bounce.out"})
										},
			onLeaveBack: () => {
										gsap.to('.surfboard', {y:200, opacity: 0, duration: 1.5}),
										gsap.to('.shop__extras', {x:200, opacity: 0, duration: 1.5})
									}
		}
	})

	// главные кнопки
	let buttons = gsap.utils.toArray('.holder-slider__btn')
	let butt = document.querySelectorAll('.shop__slider-btn')
	buttons = buttons.concat(butt)
	buttons.forEach(item => {
		gsap.from(item, {
			scale: 0,
			opacity: 0,
			duration: 1,
			delay: 2,
			ease: "bounce.out",
			scrollTrigger: {
				trigger: item,
				start: 'top 85%',
				end: 'top 10%',
				// markers: true,
				
				scrub: false,
				toggleActions: 'restart reverse restart reverse'
			}
		})
	})


	surfboard.from('.surfboard', {y: 0, opacity: 1, duration: 1.5, ease: "bounce.out"})
					 .from('.shop__extras', {delay: 1, x: 200, opacity: 0, duration: 1.5, ease: "bounce.out"})

	let icons = () => {
		const tlIco1 = gsap.timeline({defaults: { duration: .2}, repeat: -1, delay: 10, repeatDelay: 3})
		tlIco1.to('.icon', {rotate: 5})
			.to('.icon', {rotate: -5})
			.to('.icon', {rotate: 5})
			.to('.icon', {rotate: -5})
			.to('.icon', {rotate: 0})
		return tlIco1;
	}

	let arrows = () => {
		const tlArrows = gsap.timeline({ defaults: { duration: .6 }, repeat: -1, repeatDelay: 3});
		tlArrows
			// .from('.arrows-down', {opacity: 0, y: -50})
			.to('.arrows-down', { y: -70, delay: 6})
			.to('.arrows-down', { y: 0, ease: "bounce.out"})
		return tlArrows;
	}


	const tl = gsap.timeline({defaults: { duration: 1.5}})
	tl
		.from(['.icon', '.logo'], {opacity: 0, y: 150})
		.from('.ico-span', {opacity: 0, scale: 3})
		.from('.slider-item__info', {opacity: 0, x: -100})
		.from('.slider-dots__wrapper', {opacity: 0, y: 50})
		// .add(arrows)
		// .add(icons)
	// tl.to('.ico-span', {opacity: 0.3, scale: 3, delay: 2})

	// останавливает анимацию при наведении мыши.
	let ar = arrows();
	const arrowsSto = document.querySelector('.header__arrows');
	arrowsSto.addEventListener('mouseover', () => {
		ar.pause();
	});
	arrowsSto.addEventListener('mouseleave', () => {
		ar.play();
	});

	let ic = icons();
	const iconsLisn = document.querySelector('.menu__list');
	iconsLisn.addEventListener('mouseover', () => {
		ic.pause();
	});
	iconsLisn.addEventListener('mouseleave', () => {
		ic.play();
	});
}

// обьявляем timeline вне функции чтобы после того как функция отработает можно было его кильнуть
let tl;

export function map(dot = '.dot-5', line = '.line-animation-1', title = '.title-1') {

	// убиваем старый timeline
	if (tl) {
		tl.kill(true);
		tl.clear();
	}
	
	gsap.set(['.dot', '.line', '.title'], {clearProps: 'all'})

	tl = gsap.timeline({defaults: {duration: .5}})

	let scl = {scale: 2}
	let bigScl = {opacity: 1, scale: 1, ease: "bounce.out"}
	if (document.querySelector('.dot-1') === dot) {
		// console.log(document.querySelector('.dot-1'), dot)
		scl = {scale: 1, ease: "bounce.out"}
	} else {
		bigScl = {opacity: 1, scale: .5, ease: "bounce.out", delay: .1}
	}

	tl
		.from('.dot-2', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot-3', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot-4', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.fromTo('.dot-1', {opacity:0, scale: 0, ease: "bounce.out", delay: .1}, bigScl)
		.from('.dot-5', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.to(dot, scl)
		.to(title, {opacity: 1, duration: 2})
		.fromTo(line, { strokeDasharray: 850, strokeDashoffset: 850 }, 
			{ strokeDashoffset: 0, opacity: 1, duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true })

}