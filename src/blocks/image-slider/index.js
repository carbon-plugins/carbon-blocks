// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgImageSlider from '/src/assets/block-icons/ImageSlider';

registerBlockType( 'carbon-blocks/image-slider', {
	icon: SvgImageSlider,
	title: __("Image slider", 'carbon-blocks' ),
	description: __("Create a slideshow to showcase your images. Customize navigation and style options for a visually engaging experience.", 'carbon-blocks' ),
	example: {
		viewportWidth: 1200
	},
	edit,
	save,
} );
