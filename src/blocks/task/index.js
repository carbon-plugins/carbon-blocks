// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTask from '/src/assets/block-icons/Task';

registerBlockType( 'carbon-blocks/task', {
	icon: SvgTask,
	title: __( "Task", 'carbon-blocks' ),
	description: __( "Add a task line and customize its style.", 'carbon-blocks' ),
	example: {
    attributes: {
      tickBackground: "black",
      textContent: __("Task to do", "carbon-blocks"),
      color: "black"
    }
	},
	edit,
	save,
} );
