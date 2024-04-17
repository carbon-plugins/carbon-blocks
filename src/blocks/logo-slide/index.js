// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgSlide from '/src/assets/block-icons/Slide';

registerBlockType( 'carbon-blocks/logo-slide', {
	icon: SvgSlide,
	title: __( "Logo", 'carbon-blocks' ),
	description: __( "Add the logo of your partner, client, or affiliate.", 'carbon-blocks' ),
	example: {

	},
	edit,
	save,
} );
