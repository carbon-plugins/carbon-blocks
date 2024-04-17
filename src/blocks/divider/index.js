// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import Divider from '/src/assets/block-icons/Divider';

registerBlockType( 'carbon-blocks/divider', {
	icon: Divider,
	title: __( "Divider", 'carbon-blocks' ),
	description: __( "Create a seamless separation between your sections and choose from a variety of shapes to add an aesthetic dimension to your layout.", 'carbon-blocks' ),
	example: {

	},
	edit,
	save,
} );
