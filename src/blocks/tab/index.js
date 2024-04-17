// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTab from '/src/assets/block-icons/Tab';

registerBlockType( 'carbon-blocks/tab', {
	icon: SvgTab,
	title: __("Tab", 'carbon-blocks' ),
	description: __("Organize your content interactively with a customized tab.", 'carbon-blocks' ),
	example: {

	},
	edit,
	save,
} );
