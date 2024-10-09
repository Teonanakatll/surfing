import gsap from "gsap"


export function animate() {
	// gsap.from('.ico', {opacity: 0, x: -50, duration: .5, delay: 1})
	// gsap.from('.ico-span', {opacity: 0, scale: 3, duration: .5, delay: 2.5})

	let icons = () => {
		const tlIco1 = gsap.timeline({defaults: { duration: .2}, repeat: -1, repeatDelay: 3})
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
			.to('.arrows-down', { y: -70, delay: 5})
			.to('.arrows-down', { y: 0, ease: "bounce.out"})
		return tlArrows;
	}


	const tl = gsap.timeline({defaults: { duration: 1.5}})
	tl
		.from(['.icon', '.logo'], {opacity: 0, y: 150})
		.from('.ico-span', {opacity: 0, scale: 3})
		.from('.slider-item__info', {opacity: 0, x: -100})
		.from('.slider-dots__wrapper', {opacity: 0, y: 50})
		// .add(icons)
		// .add(arrows)
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

export function map() {
	const tl = gsap.timeline({defaults: {duration: .9}})
	tl
		.from('.dot1', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot2', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot3', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot4', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.from('.dot5', {opacity:0, scale: 0, ease: "bounce.out", delay: .1})
		.fromTo('.line-animation', { strokeDasharray: 600, strokeDashoffset: 600 }, 
			{ strokeDashoffset: 0, duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true })
}