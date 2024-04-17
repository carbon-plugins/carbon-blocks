// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

//Internal dependencies
import './editor.scss';
import Slider from '/src/assets/components/Slider.jsx';
import SliderSettings from '../../assets/components/SliderSettings';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;

	const blockProps = useBlockProps();
	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'carbon-blocks/testimonial' ],
		renderAppender: false,
		template: [
			[ "carbon-blocks/testimonial", { isSlide: true } ],
			[ "carbon-blocks/testimonial", { isSlide: true }  ],
			[ "carbon-blocks/testimonial", { isSlide: true }  ]
		],
		orientation: "horizontal"
	} );

	return <>
		<SliderSettings
			attributes={ attributes }
			setAttributes={ setAttributes }
			clientId={ clientId }
			disabled={{
				autoHeight: false,
				effect: true
			}}
		/>
		<Slider
			blockProps={ innerBlocksProps }
			clientId={ clientId }
			attributes={ attributes }
		>
			{ children }
		</Slider>
	</>
}
