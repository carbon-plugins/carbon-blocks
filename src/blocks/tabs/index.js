// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTabs from '/src/assets/block-icons/Tabs';

registerBlockType( 'carbon-blocks/tabs', {
	icon: SvgTabs,
	title: __("Tabs", 'carbon-blocks' ),
	description: __("Organize your content interactively with customized tabs.", 'carbon-blocks' ),
	example: {
		attributes: {
			tabLabels:[__("Our worst jokes",'carbon-blocks'), __("How to survive a meeting",'carbon-blocks')],
			id:1,
      textColor: "black",
      backgroundColor: "white",
      inactiveTextColor: "white"
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
        attributes: {
          content: __("Why do divers always dive backwards and never forwards? Because if they fell forwards they'd still be in the boat !", 'carbon-blocks' ),
          style: {
            color: {
              text: "black"
            }
          }
        }
				},
			{
				name: 'carbon-blocks/tab'
			},
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
