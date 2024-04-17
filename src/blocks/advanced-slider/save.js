// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import {
	useBlockProps, useInnerBlocksProps
} from '@wordpress/block-editor';

//Internal dependencies
import { ConditionalRender } from '../../assets/components/conditionals';

export default function save( props ) {
	const { attributes, className } = props;
	const {
		settings, effect, navigation, pagination, scrollbar, autoplay, freeMode, controls, accessibility
	} = attributes;

	const classes = classnames( className, { 'swiper': true } );
	const blockProps = useBlockProps.save( { className: classes } );
	const { children, ...innerBlocksProps } = useInnerBlocksProps.save()
	const dataAttributes = {
		"data-settings": JSON.stringify(settings),
		"data-effect": JSON.stringify(effect),
		"data-navigation": JSON.stringify(navigation),
		"data-pagination": JSON.stringify(pagination),
		"data-scrollbar": JSON.stringify(scrollbar),
		'data-autoplay': JSON.stringify(autoplay),
		'data-freeMode': JSON.stringify(freeMode),
		"data-controls": JSON.stringify(controls),
		"data-accessibility":JSON.stringify(accessibility)
	};

  return <section { ...blockProps } { ...dataAttributes }>
		<ul className="swiper-wrapper" { ...innerBlocksProps }>
			{ children }
		</ul>
		<footer>
      <ConditionalRender conditions={ pagination.enabled }>
        <section class="swiper-pagination"></section>
      </ConditionalRender>
      <ConditionalRender conditions={ navigation.enabled }>
        <button role='button' className='swiper-button-prev'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button role='button' className='swiper-button-next'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </ConditionalRender>
      <ConditionalRender conditions={ scrollbar.enabled }>
        <setion className="swiper-scrollbar"></setion>
      </ConditionalRender>
		</footer>
	</section>
};
