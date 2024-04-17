// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTestimonial from '/src/assets/block-icons/Testimonial';

registerBlockType( 'carbon-blocks/testimonial', {
	icon: SvgTestimonial,
	title: __( "Testimonial", 'carbon-blocks' ),
	description: __( "Showcase a testimonial from a satisfied client in an appealing manner.", 'carbon-blocks' ),
	example: {
    attributes: {
      style: {
        color: {
          text: "black"
        }
      }
    },
    innerBlocks: [
			{
				name: "core/heading",
				attributes: {
					textAlign: "center",
					level: 3,
					content: __( "The legend of customer service", "carbon-blocks" )
				}
			},
			{
				name: "core/paragraph",
				attributes: {
					content: __("They solved my problem with so much joy that I almost forgot why I contacted them. I'm thinking of writing a book about their customer service – it would be worth it !", "carbon-blocks")
				}
			},
      {
        name: "carbon-blocks/signature",
        attributes: {
          position: __("Customer", "carbon-blocks"),
          name: __("John Smith", "carbon-blocks")
        },
        innerBlocks: [
          {
            name: "carbon-blocks/advanced-avatar",
            attributes: {
              type: "initials",
              initials: {
                value: __("John Smith", "carbon-blocks"),
                color: "white"
              }
            }
          }
        ]
      }
    ],
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
