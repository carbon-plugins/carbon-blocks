// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTasks from '/src/assets/block-icons/Tasks';

registerBlockType( 'carbon-blocks/tasks', {
	icon: SvgTasks,
	title: __( "Tasks", 'carbon-blocks' ),
	description: __( "Add task lines and customize their styles. Mark completed tasks for a clear management of your goals.", 'carbon-blocks' ),
	example: {
    innerBlocks: [
      {
        name: 'carbon-blocks/task',
        attributes: {
          tickBackground: "black",
          textContent: __("Task to do", "carbon-blocks"),
          color: "black"
        }
      },
      {
        name: 'carbon-blocks/task',
        attributes: {
          tickBackground: "black",
          textContent: __("Task to do", "carbon-blocks"),
          color: "black"
        }
      },
      {
        name: 'carbon-blocks/task',
        attributes: {
          textContent: __("Task completed", "carbon-blocks"),
          activeTask: false
        }
      }
    ]
	},
	edit,
	save,
} );
