import classnames from 'classnames';

export default function Slider({ children, blockProps, attributes }) {
	const { settings, effect, navigation, pagination, autoplay, freeMode, controls, accessibility } = attributes;

	const dataAttributes = {
		"data-settings": JSON.stringify(settings),
		"data-effect": JSON.stringify(effect),
		"data-navigation": JSON.stringify(navigation),
		"data-pagination": JSON.stringify(pagination),
		'data-autoplay': JSON.stringify(autoplay),
		'data-freeMode': JSON.stringify(freeMode),
		"data-controls": JSON.stringify(controls),
		"data-accessibility":JSON.stringify(accessibility)
	};

	const classes = classnames( blockProps.className, { 'carbon-slider': true, 'swiper': true } );
	blockProps.className = classes;

	return <section { ...blockProps } { ...dataAttributes }>
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
};
