import { useEffect, useState } from 'react';
import Settings from '/src/assets/components/Settings.jsx';
import { dispatch } from '@wordpress/data';
import Swiper from 'swiper/bundle';
import classnames from 'classnames';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import "../../assets/styles/slider.scss";

export default function Slider({ children, blockProps, clientId, attributes }) {
	const { settings, effect, navigation, pagination, autoplay, freeMode, controls, accessibility } = attributes;
	const tag = `.editor-styles-wrapper [data-block="${clientId}"]`;
	let isExample = true;
	let doc = window.document, slider, sliderTag = tag;

	const classes = classnames( blockProps.className, { 'carbon-slider': true, 'swiper': true } );
	blockProps.className = classes;

	useEffect(() => {
		if(document.querySelector('.block-editor-block-preview__content')) {
			doc = document.querySelector(".block-editor-block-preview__content iframe").contentWindow.document;
			sliderTag = doc.querySelector(tag);
		} else {
			isExample = false;
		}
	}, []);

	useEffect(() => {
		slider = new Swiper(sliderTag, {
			direction: settings?.direction || "horizontal",
			spaceBetween: settings.spaceBetween,
			slidesPerView: settings.slidesPerView,
			loop: settings.loopMode === "loop",
			rewind: settings.loopMode === "rewind",
			simulateTouch: false,
			preventInteractionOnTransition: true,
			speed: settings.speed,
			effect: effect.type,
			autoHeight: settings.autoHeight,
			centeredSlides: settings.centeredSlides,
			initialSlide: settings.initialSlide,
			slidesPerGroup: settings.slidesPerGroup,
			pagination: pagination.enabled && {
				clickable: true,
				type: pagination.type,
				dynamicBullets: pagination.dynamicBullets,
				el: doc.querySelector(`${tag} .swiper-pagination`)
			},
			navigation:  navigation.enabled && {
				enabled: true,
				nextEl: doc.querySelector(`${tag} .swiper-button-next`),
				prevEl: doc.querySelector(`${tag} .swiper-button-prev`),
			},
			autoplay: autoplay.enabled && {
				delay: autoplay.delay,
				pauseOnMouseEnter: autoplay.pauseOnMouseEnter,
				disableOnInteraction: autoplay.disableOnInteraction,
				stopOnLastSlide: autoplay.stopOnLastSlide,
			},
			mousewheel:  controls.mousewheel.enabled,
			accessibility: {
				enabled: false,
				firstSlideMessage: accessibility.firstSlideMessage,
				lastSlideMessage: accessibility.lastSlideMessage,
				prevSlideMessage: accessibility.prevSlideMessage,
				nextSlideMessage: accessibility.nextSlideMessage
			},
			observer: true,
			loopPreventsSliding: false,
		});

		return () => {
			if(!isExample && slider) {
				slider.destroy();
			}
		};
	}, [ settings, effect, navigation, pagination, autoplay, freeMode, controls, accessibility ])

	useEffect(() => {

    const handleAddSlide = e => {
			setTimeout(() => slider && slider.slideTo(e.detail.index, 300), 40)
			setTimeout(() => slider && dispatch("core/block-editor").selectBlock(e.detail.clientId), 60)
    };

    const handleDuplicateSlide = e => {
			setTimeout(() => slider && slider.slideTo(e.detail.index, 300), 40)
			setTimeout(() => slider && dispatch("core/block-editor").selectBlock(e.detail.clientId), 60)
    };

		const sliderEl = doc.querySelector(tag);

    sliderEl.addEventListener('addSlide', handleAddSlide);
    sliderEl.addEventListener('duplicateSlide', handleDuplicateSlide);

    return () => {
      sliderEl.removeEventListener('addSlide', handleAddSlide);
			sliderEl.removeEventListener('duplicateSlide', handleDuplicateSlide);
    };
  }, [slider]);

	return <section { ...blockProps }>
		<Settings />
		<ul className="swiper-wrapper">
			{ children }
		</ul>
		{
			pagination.enabled && <div
				className="swiper-pagination"
				style={{
					height: `${pagination.size}px`,
					backgroundColor: pagination.background,
					"--swiper-pagination-bullet-width": `${pagination.size}px`,
					"--swiper-pagination-bullet-height": `${pagination.size}px`,
					"--swiper-pagination-color": pagination.color,
					"--swiper-pagination-bullet-inactive-color": pagination.inactiveColor,
					"--swiper-pagination-bullet-border-radius": `${pagination.radius}px`
				}}
			/>
		}
		{
			navigation.enabled && <>
				<div
					className="swiper-button-prev"
					style={{
						backgroundColor: navigation.background,
						"--swiper-navigation-color": navigation.color,
						"--swiper-navigation-size": `${navigation.size}px`
					}}
				/>
				<div
					className="swiper-button-next"
					style={{
						backgroundColor: navigation.background,
						"--swiper-navigation-color": navigation.color,
						"--swiper-navigation-size": `${navigation.size}px`
					}}
				/>
			</>
		}
	</section>
}
