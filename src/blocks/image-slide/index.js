// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgSlide from '/src/assets/block-icons/Slide';

registerBlockType( 'carbon-blocks/image-slide', {
	icon: SvgSlide,
	title: __( "Image slide", 'carbon-blocks' ),
	description: __( "Add an image to your slideshow.", 'carbon-blocks' ),
	example: {

	},
  edit,
	save,
} );
