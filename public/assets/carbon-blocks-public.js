import './vendor/text-animation';
import init from './vendor/animate';
import Lightbox from "./vendor/lightbox";
//import Swiper from './../node_modules/swiper/swiper-bundle';

document.addEventListener('DOMContentLoaded', function() {

	init({ threshold: 1 });

	if(document.querySelector('.wp-block-carbon-blocks-advanced-slider')) {
		document.querySelectorAll('.wp-block-carbon-blocks-advanced-slider').forEach(slider => {
			let { settings, effect, navigation, pagination, scrollbar, autoplay, freemode, controls, accessibility } = slider.dataset;
			settings = JSON.parse(settings);
			effect = JSON.parse(effect);
			navigation = JSON.parse(navigation);
			pagination = JSON.parse(pagination);
			scrollbar = JSON.parse(scrollbar);
			autoplay = JSON.parse(autoplay);
			freemode = JSON.parse(freemode);
			controls = JSON.parse(controls);
			accessibility = JSON.parse(accessibility);

			new Swiper(slider, {
				slidesPerView: settings.slidesPerView,
				loop: settings.loopMode === "loop",
				rewind: settings.loopMode === "rewind",
				speed: settings.speed,
				effect: effect.type,
				autoHeight: settings.autoHeight,
				spaceBetween: settings.spaceBetween,
				centeredSlides: settings.centeredSlides,
				initialSlide: settings.initialSlide,
				slidesPerGroup: settings.slidesPerGroup,
				pagination: pagination.enabled && {
					el: '.swiper-pagination',
					clickable: true,
					type: pagination.type,
					dynamicBullets: pagination.dynamicBullets
				},
				scrollbar: scrollbar.enabled && {
					el: '.swiper-scrollbar',
					hide: scrollbar.hide,
					draggable: scrollbar.draggable,
					snapOnRelease: scrollbar.snapOnRelease
				},
				navigation: navigation.enabled && {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: autoplay.enabled && {
					delay: autoplay.delay,
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
			})
		})
	}

	// if(document.querySelector('.wp-block-carbon-blocks-share-buttons')) {
	// 	const title = document.querySelector('meta[property="og:title"]')?.content || document.getElementsByTagName("title")[0].innerHTML;
	// 	const url = document.querySelector('meta[property="og:url"]')?.content || window.location.href;
	// 	const image = document.querySelector('meta[property="og:image"]')?.content;
	// 	document.querySelectorAll('.wp-block-carbon-blocks-share-buttons').forEach(shareButtons => {
	// 		shareButtons.querySelectorAll('li > a').forEach(shareButton => {
	// 			switch (shareButton.dataset.name) {
	// 				case "Facebook":
	// 					shareButton.href = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
	// 					break;
	// 				case "Twitter":
	// 					shareButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
	// 					break;
	// 				case "LinkedIn":
	// 					shareButton.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
	// 					break;
	// 				case "Pinterest":
	// 					shareButton.href = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`;
	// 					break;
	// 				case "Email":
	// 					shareButton.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
	// 					break;
	// 			}
	// 		})
	// 	});
	// }

	// if(document.querySelector('[data-single-lightbox]')) {
	// 	let i = 0;
	// 	document.querySelectorAll('[data-single-lightbox]').forEach(image => {
	// 		Lightbox({
	// 			selector: `*[data-single-lightbox="${image.dataset.singleLightbox}"]`,
	// 			openEffect: 'fade',
	// 			closeEffect: 'none',
	// 			slideEffect: 'slide',
	// 			draggable: false
	// 		});
	// 	})
	// }

	/*
	/*if(document.querySelector('.wp-block-carbon-blocks-map')) {

		document.querySelectorAll('.wp-block-carbon-blocks-map').forEach(leafletMap => {
			const map = L.map(leafletMap).setView([leafletMap.dataset.lat, leafletMap.dataset.lng], leafletMap.dataset.zoom);
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '© OpenStreetMap'
			}).addTo(map);
			const marker = L.marker([leafletMap.dataset.lat, leafletMap.dataset.lng]).addTo(map);
			marker.bindPopup(leafletMap.dataset.text)
		})

	}*/

})

