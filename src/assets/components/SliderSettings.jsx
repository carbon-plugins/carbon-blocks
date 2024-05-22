import {
	PanelBody, RangeControl, ToggleControl, SelectControl, TextControl,
	 __experimentalNumberControl as NumberControl,
	 __experimentalToggleGroupControl as ToggleGroupControl,
	 __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ConditionalRender } from './conditionals';
import Toggle from './Toggle';

export default function SliderSettings({ attributes, setAttributes, clientId, disabled }) {
	const {
		settings, effect, navigation, pagination,
		autoplay, freeMode, controls, accessibility
	} = attributes;

	const totalSlides = useSelect(
    select => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks.length
  );

	useEffect(() => {
		if(settings.loopMode != "loop") return;
		if(totalSlides >= settings.slidesPerView * 2) return;

		setAttributes({ settings: { ...settings, loopMode: "" }})
	}, [settings.slidesPerView]);

	return <InspectorControls>
		<PanelBody title={ __( 'Settings', 'carbon-blocks' ) }>
			<RangeControl
				label={ __( 'Slides per view', 'carbon-blocks' ) }
				value={ settings.slidesPerView }
				min={ 1 }
				max={ 10 }
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
			<ConditionalRender conditions={ !disabled.autoHeight }>
				<ToggleControl
					label={ __( "Auto height", 'carbon-blocks' ) }
					checked={ settings.autoHeight }
					onChange={ autoHeight => setAttributes({ settings: {
						...settings, autoHeight
					}})}
					help={ __( "Slider will adapt its height to the height of the currently active slide", 'carbon-blocks' ) }
				/>
			</ConditionalRender>
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
				options={ [
					{ value: '', label: __('No loop') },
					{ value: 'loop', label: __('Loop'), disabled: totalSlides < settings.slidesPerView * 2 },
					{ value: 'rewind', label: __('Rewind') },
				] }
				onChange={ loopMode => setAttributes({ settings: {
					...settings, loopMode
				}})}
				help={ totalSlides < settings.slidesPerView * 2 && __( "To enable loop mode, total number of slides must be greater than or equal two times your slides per view.", 'carbon-blocks' ) }
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
		<ConditionalRender conditions={ !disabled.effect }>
			<PanelBody title={ __( "Effect", 'carbon-blocks' ) } >
				<SelectControl
					label={ __( "Effect type", 'carbon-blocks' ) }
					value={ effect.type }
					options={[
						{ value: 'slide', label: __( "Slide", 'carbon-blocks' ) },
						{ value: 'fade', label: __( "Fade", 'carbon-blocks' ), disabled: settings.slidesPerView > 1 },
						{ value: 'flip', label: __( "Flip", 'carbon-blocks' ), disabled: settings.slidesPerView > 1 },
						{ value: 'coverflow', label: __( "Coverflow", 'carbon-blocks' ), disabled: settings.slidesPerView > 1 },
					]}
					onChange={ type => setAttributes({ effect: {
						...effect, type
					}})}
					help={ settings.slidesPerView > 1 && __( "To enable other transitions, sides per view must be equal to 1.", 'carbon-blocks' ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
				/>
			</PanelBody>
		</ConditionalRender>
		<PanelBody title={ __( "Navigation", 'carbon-blocks' ) }>
			<ToggleControl
				label={ __( "Enable navigation", 'carbon-blocks' ) }
				checked={ navigation.enabled }
				onChange={ enabled => setAttributes({ navigation: {
					...navigation, enabled
				}})}
				help={ __( "Display arrows to navigate between slides", 'carbon-blocks' ) }
			/>
			{
				navigation.enabled && <>
					<NumberControl
						__next40pxDefaultSize
						label="Arrow size"
						onChange={ size => setAttributes({ navigation: {
							...navigation, size
						}})}
						value={ navigation.size }
						min={ 20 }
						max={ 50 }
					/>
				<PanelColorSettings
					enableAlpha
					__experimentalIsRenderedInSidebar
					className="carbon-blocks-color-panel carbon-blocks-color-panel__is-child"
					colorSettings={ [
						{
							value: navigation.color,
							onChange: color => setAttributes( { navigation: {
								...navigation, color
							} } ),
							label: __( 'Color', 'carbon-blocks' ),
						},
						{
							value: navigation.background,
							onChange: background => setAttributes( { navigation: {
								...navigation, background
							} } ),
							label: __( 'Background', 'carbon-blocks' ),
						},
					] }
				/>
			</>
		}
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
			{
				pagination.enabled && <>
					{/* <SelectControl
						label={ __( "Pagination type", 'carbon-blocks' ) }
						value={ pagination.type }
						options={[
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
					/> */}
					{/* <ConditionalRender conditions={ pagination.type === "bullets" }>
						<Toggle
							value={ pagination.dynamicBullets }
							onChange={ () => setAttributes({ pagination: {
								...pagination, dynamicBullets: !pagination.dynamicBullets
							}})}
							label={ __( "Enable dynamic bullets", 'carbon-blocks' ) }
							help={ __( "Enable if you have a lot of slides, it will keep only few bullets visible.", 'carbon-blocks' ) }
						>

						</Toggle>
					</ConditionalRender> */}
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label={ __( "Bullet size", 'carbon-blocks' ) }
						onChange={ size => setAttributes({ pagination: {
							...pagination, size
						}})}
						value={ pagination.size }
					>
						<ToggleGroupControlOption
							label="Small"
							value={ 6 }
						/>
						<ToggleGroupControlOption
							label="Medium"
							value={ 8 }
						/>
						<ToggleGroupControlOption
							label="Large"
							value={ 10 }
						/>
					</ToggleGroupControl>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						label={ __( "Bullet radius", 'carbon-blocks' ) }
						onChange={ radius => setAttributes({ pagination: {
							...pagination, radius
						}})}
						value={ pagination.radius }
					>
						<ToggleGroupControlOption
							label="Square"
							value={ 0 }
						/>
						<ToggleGroupControlOption
							label="Rounded"
							value={ 2 }
						/>
						<ToggleGroupControlOption
							label="Circle"
							value={ 10 }
						/>
					</ToggleGroupControl>
					<PanelColorSettings
						enableAlpha
						__experimentalIsRenderedInSidebar
						className="carbon-blocks-color-panel carbon-blocks-color-panel__is-child"
						colorSettings={ [
							{
								value: pagination.color,
								onChange: color => setAttributes({ pagination: {
									...pagination, color
								} } ),
								label: __( 'Bullet color', 'carbon-blocks' ),
							},
							{
								value: pagination.inactiveColor,
								onChange: inactiveColor => setAttributes({ pagination: {
									...pagination, inactiveColor
								} } ),
								label: __( 'Inactive bullet color', 'carbon-blocks' ),
							},
							{
								value: pagination.background,
								onChange: background => setAttributes({ pagination: {
									...pagination, background
								} } ),
								label: __( 'Background', 'carbon-blocks' ),
							},
						] }
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
						help={ settings.loopMode && "This setting is not available with loop or rewind." }
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
				__next40pxDefaultSize
			/>
			<TextControl
				label={ __( "Last slide message", 'carbon-blocks' ) }
				value={ accessibility.lastSlideMessage }
				onChange={ lastSlideMessage => setAttributes({ accessibility: {
					...accessibility, lastSlideMessage
				}})}
				help={ __( "Message for screen reader when slider is on last slide", 'carbon-blocks' ) }
				__next40pxDefaultSize
			/>
			<TextControl
				label={ __( "Previous slide message", 'carbon-blocks' ) }
				value={ accessibility.prevSlideMessage }
				onChange={ prevSlideMessage => setAttributes({ accessibility: {
					...accessibility, prevSlideMessage
				}})}
				help={ __( "Message for screen readers for previous button", 'carbon-blocks' ) }
				__next40pxDefaultSize
			/>
			<TextControl
				label={ __( "Next slide message", 'carbon-blocks' ) }
				value={ accessibility.nextSlideMessage }
				onChange={ nextSlideMessage => setAttributes({ accessibility: {
					...accessibility, nextSlideMessage
				}})}
				help={ __( "Message for screen readers for next button", 'carbon-blocks' ) }
				__next40pxDefaultSize
			/>
		</PanelBody>
	</InspectorControls>
}
