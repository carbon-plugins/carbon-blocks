// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import Edit from './edit';
import save from './save';
import SvgBlockSlider from '/src/assets/block-icons/BlockSlider';

registerBlockType( 'carbon-blocks/block-slider', {
	icon: SvgBlockSlider,
	title: __( "Block slider", 'carbon-blocks' ),
	description: __( "Craft feature-rich slideshows by integrating a variety of blocks, providing a dynamic and personalized presentation.", 'carbon-blocks' ),
	example: {

	},
	edit: Edit,
	save,
} );
