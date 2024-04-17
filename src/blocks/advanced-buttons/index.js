// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgAdvancedButtons from '/src/assets/block-icons/AdvancedButtons';

registerBlockType( 'carbon-blocks/advanced-buttons', {
	icon: SvgAdvancedButtons,
	title: __( "Advanced buttons", 'carbon-blocks' ),
	description: __("Boost user interaction on your site by creating one or more dynamic buttons. Easily customize their links and styles.", 'carbon-blocks' ),
	example: {
		innerBlocks: [
			{
				name: 'carbon-blocks/advanced-button',
				attributes: {
					text: __('Button 1', "carbon-blocks"),
          showIcon: false,
          style: {
            color: {
              background: "black",
              text: "white"
            },
            spacing: {
              padding: {
                top: "5px",
                right: "15px",
                bottom: "5px",
                left: "15px"
              },
              blockGap: "10px"
            }
          }
				},
			},
			{
				name: 'carbon-blocks/advanced-button',
				attributes: {
					text: __('Button 2', "carbon-blocks"),
          style: {
            color: {
              background: "white",
              text: "black"
            },
            spacing: {
              padding: {
                top: "5px",
                right: "15px",
                bottom: "5px",
                left: "15px"
              },
              blockGap: "10px"
            },
            border: {
              color: "black",
              style: "solid",
              width: "1px",
            }
          }
				},
        innerBlocks: [
          {
            name: 'carbon-blocks/icons',
            attributes:{
              icon: {
                category: __( 'Miscellaneous', '---' ),
                keywords: [],
                name: __( 'Wordpress', '---' ),
                slug: "dashicons:wordpress",
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'><path fill='currentColor' d='M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10s10-4.48 10-10zM10 1.01c4.97 0 8.99 4.02 8.99 8.99s-4.02 8.99-8.99 8.99S1.01 14.97 1.01 10S5.03 1.01 10 1.01zM8.01 14.82L4.96 6.61c.49-.03 1.05-.08 1.05-.08c.43-.05.38-1.01-.06-.99c0 0-1.29.1-2.13.1c-.15 0-.33 0-.52-.01c1.44-2.17 3.9-3.6 6.7-3.6c2.09 0 3.99.79 5.41 2.09c-.6-.08-1.45.35-1.45 1.42c0 .66.38 1.22.79 1.88c.31.54.5 1.22.5 2.21c0 1.34-1.27 4.48-1.27 4.48l-2.71-7.5c.48-.03.75-.16.75-.16c.43-.05.38-1.1-.05-1.08c0 0-1.3.11-2.14.11c-.78 0-2.11-.11-2.11-.11c-.43-.02-.48 1.06-.05 1.08l.84.08l1.12 3.04zm6.02 2.15L16.64 10s.67-1.69.39-3.81c.63 1.14.94 2.42.94 3.81c0 2.96-1.56 5.58-3.94 6.97zM2.68 6.77L6.5 17.25c-2.67-1.3-4.47-4.08-4.47-7.25c0-1.16.2-2.23.65-3.23zm7.45 4.53l2.29 6.25c-.75.27-1.57.42-2.42.42c-.72 0-1.41-.11-2.06-.3z'/></svg>"
              },
              size: 20
            }
          }
        ]
			},
		],
	},
	edit,
	save,
} );
