import Swiper from "../../../node_modules/swiper/swiper-bundle";

document.addEventListener("DOMContentLoaded", function() {
	if(document.querySelector('.carbon-slider')) {
		document.querySelectorAll('.carbon-slider').forEach(slider => {
			let { settings, effect, navigation, pagination, autoplay, freemode, controls, accessibility } = slider.dataset;
			settings = JSON.parse(settings);
			effect = JSON.parse(effect);
			navigation = JSON.parse(navigation);
			pagination = JSON.parse(pagination);
			autoplay = JSON.parse(autoplay);
			freemode = JSON.parse(freemode);
			controls = JSON.parse(controls);
			accessibility = JSON.parse(accessibility);

			new Swiper(slider, {
				direction: settings?.direction || "horizontal",
				loop: settings.loopMode === "loop",
				rewind: settings.loopMode === "rewind",
				speed: settings.speed,
				effect: effect.type,
				autoHeight: settings.autoHeight,
				spaceBetween: settings.spaceBetween,
				centeredSlides: settings.centeredSlides,
				initialSlide: settings.initialSlide,
				pagination: pagination.enabled && {
					el: slider.querySelector('.swiper-pagination'),
					clickable: true,
					type: pagination.type,
					dynamicBullets: pagination.dynamicBullets,
				},
				navigation: navigation.enabled && {
					nextEl: slider.querySelector('.swiper-button-next'),
					prevEl: slider.querySelector('.swiper-button-prev'),
				},
				autoplay: autoplay.enabled && {
					delay: autoplay.delay,
					disableOnInteraction: autoplay.disableOnInteraction,
					stopOnLastSlide: autoplay.stopOnLastSlide,
					pauseOnMouseEnter: autoplay.pauseOnMouseEnter
				},
				freeMode: freemode.enabled && {
					momentum: freemode.momentum,
					sticky : freemode.sticky
				},
				keyboard: {
					enabled: controls.keyboard.enabled
				},
				mousewheel: controls.mousewheel.enabled,
				accessibility: {
					enabled: true,
					firstSlideMessage: accessibility.firstSlideMessage,
					lastSlideMessage: accessibility.lastSlideMessage,
					prevSlideMessage: accessibility.prevSlideMessage,
					nextSlideMessage: accessibility.nextSlideMessage
				},
				grabCursor: true,
				slidesPerView: 1,
				slidesPerGroup: 1,
				breakpoints: {
					480: {
						slidesPerView: settings.slidesPerView === 1 ? 1 : 2,
						slidesPerGroup: settings.slidesPerView === 1 ? 1 : 2
					},
					720: {
						slidesPerView: settings.slidesPerView,
						slidesPerGroup: settings.slidesPerGroup,
					}
				}
			})
		})
	}
})

