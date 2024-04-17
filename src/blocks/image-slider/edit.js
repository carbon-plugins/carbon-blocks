// External dependencies

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
		allowedBlocks: [ 'carbon-blocks/image-slide' ],
		renderAppender: false,
		template: [
			[ "carbon-blocks/image-slide" ],
			[ "carbon-blocks/image-slide" ],
			[ "carbon-blocks/image-slide" ]
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
				effect: false
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
