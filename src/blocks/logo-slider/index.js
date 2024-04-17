// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgLogoSlider from '/src/assets/block-icons/LogoSlider';

registerBlockType( 'carbon-blocks/logo-slider', {
	icon: SvgLogoSlider,
	title: __("Logo slider", 'carbon-blocks' ),
	description: __("Create an appealing slideshow showcasing the logos of your partners, clients, or affiliates.", 'carbon-blocks' ),
	example: {
		viewportWidth: 960
	},
	edit,
	save,
} );
