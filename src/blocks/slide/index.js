// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgSlide from '/src/assets/block-icons/Slide';

registerBlockType( 'carbon-blocks/slide', {
	icon: SvgSlide,
	title: __( "Slide", 'carbon-blocks' ),
	description: __( "", 'carbon-blocks' ),
	example: {

	},
	edit,
	save,
} );
