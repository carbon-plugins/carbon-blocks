// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Fragment, useState, useRef, useEffect } from '@wordpress/element';
import {
	BlockControls, useInnerBlocksProps,
	InspectorControls, useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody, RangeControl, ToggleControl, SelectControl, TextControl,
	ToolbarGroup, __experimentalNumberControl as NumberControl, ColorPalette
} from '@wordpress/components';
import { dispatch, useSelect } from '@wordpress/data';

//Internal dependencies
import './editor.scss';
import Settings from '/src/assets/components/Settings.jsx';
import Swiper from 'swiper/bundle';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId, className } = props;
	const {
		settings, effect, navigation, pagination, scrollbar,
		autoplay, freeMode, controls, accessibility
	} = attributes;

  const navigationNextRef 	= useRef(null);
  const navigationPrevRef 	= useRef(null);
  const paginationRef 			= useRef(null);
  const scrollbarRef 				= useRef(null);
  const [slider, setSider] 	= useState(null);

	const childrenBlocks = useSelect(
    select => select( 'core/block-editor' ).getBlocks( clientId )
  );

	const totalSlides = 1;

	useEffect(() => {
		slider && slider.update();
	}, [ childrenBlocks ])

	useEffect(() => {
		slider && slider.update();
	}, [ attributes ])

	useEffect(() => {
    const handleAddSlide = e => {
			slider.update()
			setTimeout(() => {
				slider.slideTo(e.detail.index)
			}, 100)
			setTimeout(() => {
				dispatch("core/block-editor").selectBlock(e.detail.clientId);
			}, 500)
    };

    const handleRemoveSlide = e => {
			slider.update()
    };

    const handleDuplicateSlide = e => {
			slider.update()
			setTimeout(() => {
				slider.slideTo(e.detail.index)
			}, 100)
    };

    document.addEventListener('addSlide', handleAddSlide);
    document.addEventListener('removeSlide', handleRemoveSlide);
    document.addEventListener('duplicateSlide', handleDuplicateSlide);

    return () => {
      document.removeEventListener('addSlide', handleAddSlide);
      document.removeEventListener('removeSlide', handleRemoveSlide);
			document.removeEventListener('duplicateSlide', handleDuplicateSlide);
    };
  }, [slider]);

	useEffect(() => {
		const container = document.querySelector('.editor-styles-wrapper');
		const tag = container.querySelector(`[data-block="${clientId}"]`)
		const newSlider = new Swiper(tag, {
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
			simulateTouch: false,
			preventInteractionOnTransition: true,
			pagination: pagination.enabled && {
				el: paginationRef.current,
				clickable: true,
				type: pagination.type,
				dynamicBullets: pagination.dynamicBullets
			},
			scrollbar: scrollbar.enabled && {
				el: scrollbarRef.current,
				hide: scrollbar.hide,
				draggable: false,
			},
			navigation: navigation.enabled && {
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			},
			autoplay: autoplay.enabled && {
				delay: autoplay.delay,
				pauseOnMouseEnter: autoplay.pauseOnMouseEnter
			},
			mousewheel: controls.mousewheel.enabled,
			accessibility: {
				enabled: true,
				firstSlideMessage: accessibility.firstSlideMessage,
				lastSlideMessage: accessibility.lastSlideMessage,
				prevSlideMessage: accessibility.prevSlideMessage,
				nextSlideMessage: accessibility.nextSlideMessage
			}
		});
		setSider( newSlider )
		newSlider.updateAutoHeight()
		return () => {
			newSlider.destroy();
		};
}, [attributes]);

	const classes = classnames( className, { 'swiper': true } );
	const blockProps = useBlockProps( { className: classes } );
	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/slide' ],
		renderAppender: () => {
			return <BlockControls>
			<ToolbarGroup>

			</ToolbarGroup>
		</BlockControls>
		},
		template: [
			[ "carbon-blocks/slide" ]
		],
		orientation: "horizontal"
	} );

  return <Fragment>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'carbon-blocks' ) }>
				<RangeControl
					label={ __( 'Slides per view', 'carbon-blocks' ) }
					value={ settings.slidesPerView }
					min={1}
					max={10}
					onChange={ slidesPerView => setAttributes({ settings: {
						...settings, slidesPerView
					}})}
					help={ __( "Number of slides visible at the same time", 'carbon-blocks' ) }
				/>
				{
					settings.slidesPerView > 1 && <>
						<RangeControl
							label={ __( 'Slides per group', 'carbon-blocks' ) }
							value={ settings.slidesPerGroup }
							min={ 1 }
							max={ 10 }
							onChange={ slidesPerGroup => setAttributes({ settings: {
								...settings, slidesPerGroup
							}})}
							help={ __( "Number of slides moving at the same time", 'carbon-blocks' ) }
						/>
						<RangeControl
							label={ __( 'Space between slides', "catbon-blocks" ) }
							value={ settings.spaceBetween }
							min={ 0 }
							max={ 100 }
							onChange={ spaceBetween => setAttributes({ settings: {
								...settings, spaceBetween
							}})}
							help={ __( "Distance between slides (in px)", 'carbon-blocks' ) }
						/>
					</>
				}
				<NumberControl
					min={ 0 }
					label={ __( "Initial slide", 'carbon-blocks' ) }
					value={ settings.initialSlide }
					onChange={ initialSlide => setAttributes({ settings: {
						...settings, initialSlide
					}})}
					__next40pxDefaultSize
  			/>
				<ToggleControl
					label={ __( "Auto height", 'carbon-blocks' ) }
					checked={ settings.autoHeight }
					onChange={ autoHeight => setAttributes({ settings: {
						...settings, autoHeight
					}})}
					help={ __( "Slider will adapt its height to the height of the currently active slide", 'carbon-blocks' ) }
				/>
				<ToggleControl
					label={ __( "Center slides", 'carbon-blocks' ) }
					checked={ settings.centeredSlides }
					onChange={ centeredSlides => setAttributes({ settings: {
						...settings, centeredSlides
					}})}
					help={ __( "Active slide will be centered", 'carbon-blocks' ) }
				/>
				<SelectControl
					label={ __( "Loop mode", 'carbon-blocks' ) }
					value={ settings.loopMode }
					options={[
						{ value: '', label: __('No loop') },
						totalSlides <= 1 && { value: 'loop', label: __('Loop') },
						{ value: 'rewind', label: __('Rewind') },
					]}
					onChange={ loopMode => setAttributes({ settings: {
						...settings, loopMode
					}})}
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={ __( "Transition speed", 'carbon-blocks' ) }
					value={ settings.speed }
					min={ 100 }
					max={ 2000 }
					step={ 100 }
					onChange={ speed => setAttributes({ settings: {
						...settings, speed
					}})}
					help={ __( "Duration of transition between slides (in ms)", 'carbon-blocks' ) }
				/>
			</PanelBody>
			<PanelBody title={ __( "Effect", 'carbon-blocks' ) } >
				<SelectControl
					label={ __( "Effect type", 'carbon-blocks' ) }
					value={ effect.type }
					options={[
						{ value: 'slide', label: __( "Slide", 'carbon-blocks' ) },
						{ value: 'fade', label: __( "Fade", 'carbon-blocks' ) },
						{ value: 'flip', label: __( "Flip", 'carbon-blocks' ) },
						{ value: 'coverflow', label: __( "Coverflow", 'carbon-blocks' ) },
					]}
					onChange={ type => setAttributes({ effect: {
						...effect, type
					}})}
					help={ __( "Type of transition between slides (transition can be weird due to how the editor works, but will render correctly)", 'carbon-blocks' ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</PanelBody>
			<PanelBody title={ __( "Navigation", 'carbon-blocks' ) }>
				<ToggleControl
					label={ __( "Enable navigation", 'carbon-blocks' ) }
					checked={ navigation.enabled }
					onChange={ enabled => setAttributes({ navigation: {
						...navigation, enabled
					}})}
					help={ __( "Display arrows to navigate between slides", 'carbon-blocks' ) }
				/>
				<ColorPalette
					value={ navigation.arrowsColor }
					onChange={ arrowsColor => setAttributes({ navigation: {
						...navigation, arrowsColor
					}})}
				/>
				<ColorPalette
					value={ navigation.background }
					onChange={ backgroundColor => setAttributes({ navigation: {
						...navigation, backgroundColor
					}})}
				/>
			</PanelBody>
			<PanelBody title={ __( "Pagination", 'carbon-blocks' ) }>
				<ToggleControl
					label={ __( "Enable pagination", 'carbon-blocks' ) }
					checked={ pagination.enabled }
					onChange={ enabled => setAttributes({ pagination: {
						...pagination, enabled
					}})}
					help={ __( "Display a pagination to navigate between slides", 'carbon-blocks' ) }
				/>
				<SelectControl
					label={ __( "Pagination type", 'carbon-blocks' ) }
					value={ pagination.type }
					options={[
						{ value: '', label: __( "No pagination", 'carbon-blocks' ) },
						{ value: 'bullets', label: __( "Bullets", 'carbon-blocks' ) },
						{ value: 'progressbar', label: __( "Progress bar", 'carbon-blocks' ) },
						{ value: 'custom', label: __( "Pagination", 'carbon-blocks' ) },
						{ value: 'fraction', label: __( "Fraction", 'carbon-blocks' ) },
					]}
					onChange={ type => setAttributes({ pagination: {
						...pagination, type
					}})}
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				{
					pagination.type === "bullets" && <>
						<ToggleControl
							label={ __( "Dynamic bullets", 'carbon-blocks' ) }
							value={ pagination.dynamicBullets }
							onChange={ dynamicBullets => setAttributes({ pagination: {
								...pagination, dynamicBullets
							}})}
							help={ __( "Enable if you have a lot of slides, it will keep only few bullets visible.", 'carbon-blocks' ) }
						/>
						{
							pagination.dynamicBullets &&  <NumberControl
								label={ __( "Number of main bullets", 'carbon-blocks' ) }
								min={1}
								value={ pagination.dynamicMainBullets }
								onChange={ dynamicMainBullets => setAttributes({ pagination: {
									...pagination, dynamicMainBullets
								}})}
							/>
						}
					</>
				}
			</PanelBody>
			<PanelBody title={ __( "Scrollbar", 'carbon-blocks' ) }>
				<ToggleControl
					label={ __( "Enable scrollbar", 'carbon-blocks' ) }
					checked={ scrollbar.enabled }
					onChange={ enabled => setAttributes({ scrollbar: {
						...scrollbar, enabled
					}})}
					help={ __( "(Scrollbar is not draggable in the editor)", 'carbon-blocks' ) }
				/>
				{
					scrollbar.enabled && <>
						<ToggleControl
							label={ __( "Hide scrollbar on release", 'carbon-blocks' ) }
							checked={ scrollbar.hide }
							onChange={ hide => setAttributes({ scrollbar: {
								...scrollbar, hide
							}})}
							help={ __( "Hide scrollbar automatically after user interaction", 'carbon-blocks' ) }
						/>
					</>
				}
			</PanelBody>
			<PanelBody title={ __( "Autoplay", 'carbon-blocks' ) }>
				<ToggleControl
					label={ __( "Enable autoplay", 'carbon-blocks' ) }
					checked={ autoplay.enabled }
					onChange={ enabled => setAttributes({ autoplay: {
						...autoplay, enabled
					}})}
				/>
				{
					autoplay.enabled && <>
						<RangeControl
							label={ __( "Delay", 'carbon-blocks' ) }
							value={ autoplay.delay }
							min={ 100 }
							max={ 5000 }
							step={ 100 }
							onChange={ delay => setAttributes({ autoplay: {
								...autoplay, delay
							}})}
						/>
						<ToggleControl
							label={ __( "Disable on interaction", 'carbon-blocks' ) }
							checked={ autoplay.disableOnInteraction }
							onChange={ disableOnInteraction => setAttributes({ autoplay: {
								...autoplay, disableOnInteraction
							}})}
						/>
						<ToggleControl
							label={ __( "Pause on mouse enter", 'carbon-blocks' ) }
							checked={ autoplay.pauseOnMouseEnter }
							onChange={ pauseOnMouseEnter => setAttributes({ autoplay: {
								...autoplay, pauseOnMouseEnter
							}})}
						/>
						<ToggleControl
							label={ __( "Stop on last slide", 'carbon-blocks' ) }
							checked={ autoplay.stopOnLastSlide }
							onChange={ stopOnLastSlide => setAttributes({ autoplay: {
								...autoplay, stopOnLastSlide
							}})}
							disabled={ settings.loopMode }
						/>
					</>
				}
			</PanelBody>
			<PanelBody title={ __( "Free mode", 'carbon-blocks' ) }>
				<ToggleControl
					label={__( "Enable freemode", 'carbon-blocks' ) }
					checked={ freeMode.enabled }
					onChange={ enabled => setAttributes({ freeMode: {
						...freeMode, enabled
					}})}
					help={__( "Disabled in the editor (due to how blocks work), but it will render correctly", 'carbon-blocks' ) }
				/>
				{
					freeMode.enabled && <>
						<ToggleControl
							label={ __( "Momentum", 'carbon-blocks' ) }
							checked={ freeMode.momentum }
							onChange={ momentum => setAttributes({ freeMode: {
								...freeMode, momentum
							}})}
							help={ __( "If enabled, then slide will keep moving for a while after you release it", 'carbon-blocks' ) }
						/>
						<ToggleControl
							label={ __( "Sticky", 'carbon-blocks' ) }
							checked={ freeMode.sticky }
							onChange={ sticky => setAttributes({ freeMode: {
								...freeMode, sticky
							}})}
							help={ __( "Set to enabled to enable snap to slides positions", 'carbon-blocks' ) }
						/>
					</>
				}
			</PanelBody>
			<PanelBody title={ __( "Controls", 'carbon-blocks' ) }>
				<ToggleControl
					label={__( "Enable keyboard control", 'carbon-blocks' ) }
					checked={ controls.keyboard.enabled }
					onChange={ enabled => setAttributes({ controls: {
						...controls, keyboard: { ...controls.keyboard, enabled }
					}})}
					help={ __( "Enables navigation through slides using keyboard (disabled in the editor)", 'carbon-blocks' ) }
				/>
				<ToggleControl
					label={__( "Enable mousewheel control", 'carbon-blocks' ) }
					checked={ controls.mousewheel.enabled }
					onChange={ enabled => setAttributes({ controls: {
						...controls, mousewheel: { ...controls.mousewheel, enabled }
					}})}
					help={ __( "Enables navigation through slides using mouse wheel (also if freemode is enabled)", 'carbon-blocks' ) }
				/>
			</PanelBody>
			<PanelBody title={ __( "Accessibility", 'carbon-blocks' ) }>
				<TextControl
					label={ __( "First slide message", 'carbon-blocks' ) }
					value={ accessibility.firstSlideMessage }
					onChange={ firstSlideMessage => setAttributes({ accessibility: {
						...accessibility, firstSlideMessage
					}})}
					help={ __( "Message for screen readers when slider is on first slide", 'carbon-blocks' ) }
				/>
				<TextControl
					label={ __( "Last slide message", 'carbon-blocks' ) }
					value={ accessibility.lastSlideMessage }
					onChange={ lastSlideMessage => setAttributes({ accessibility: {
						...accessibility, lastSlideMessage
					}})}
					help={ __( "Message for screen reader when slider is on last slide", 'carbon-blocks' ) }
				/>
				<TextControl
					label={ __( "Previous slide message", 'carbon-blocks' ) }
					value={ accessibility.prevSlideMessage }
					onChange={ prevSlideMessage => setAttributes({ accessibility: {
						...accessibility, prevSlideMessage
					}})}
					help={ __( "Message for screen readers for previous button", 'carbon-blocks' ) }
				/>
				<TextControl
					label={ __( "Next slide message", 'carbon-blocks' ) }
					value={ accessibility.nextSlideMessage }
					onChange={ nextSlideMessage => setAttributes({ accessibility: {
						...accessibility, nextSlideMessage
					}})}
					help={ __( "Message for screen readers for next button", 'carbon-blocks' ) }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...blockProps } style={{ "--swiper-theme-color": navigation.arrowsColor }}>
			<Settings title={ __( "Advanced slider", 'carbon-blocks' )} icon='solar:posts-carousel-horizontal-bold-duotone' position="left"/>
			<ul class="swiper-wrapper">
				{ children }
			</ul>
      <footer>
				<section ref={ paginationRef } class="swiper-pagination" style={{ display: !pagination.enabled ? 'none' : 'flex' }}></section>
				<button ref={ navigationPrevRef } role='button' className='swiper-button-prev' style={{ display: !navigation.enabled ? 'none' : 'flex' }}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
				<button ref={ navigationNextRef } role='button' className='swiper-button-next' style={{ display: !navigation.enabled ? 'none' : 'flex' }}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
				<setion ref={ scrollbarRef } className="swiper-scrollbar" style={{ display: !scrollbar.enabled ? 'none' : 'block', opacity: scrollbar.enabled && !scrollbar.hide && 1 }} ></setion>
      </footer>
		</section>
	</Fragment>
}
