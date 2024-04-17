// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgCounterItem from '/src/assets/block-icons/CounterItem';

registerBlockType( 'carbon-blocks/counter', {
	icon: SvgCounterItem,
	title: __("Counter", 'carbon-blocks' ),
	description: __("Display key information by incorporating an icon, a significant number, and descriptive text to highlight statistics, achievements, or any other essential elements.", 'carbon-blocks' ),
  example: {
    attributes: {
      number: "35",
      text: __("houses built", "carbon-blocks"),
      style: {
				color: {
					text: "black"
				},
        spacing: {
          blockGap: "10px"
        }
      }
    },
    innerBlocks: [
      {
        name: 'carbon-blocks/icons',
        attributes:{
          icon: {
            svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'/></svg>"
          },
          size: 20
        }
      }
    ]
  },
	// styles: [
  //   {
	// 		name: 'default',
	// 		label: __( 'Default', 'carbon-blocks' ),
  //     isDefault: true
  //   },
	// 	{
	// 		name: 'modern',
	// 		label: __( 'Modern', 'carbon-blocks' )
  //   }
	// ],
	edit,
	save,
} );
