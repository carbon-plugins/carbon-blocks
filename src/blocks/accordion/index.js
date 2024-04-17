// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgAccordion from '/src/assets/block-icons/Accordion';

registerBlockType( 'carbon-blocks/accordion', {
	icon: SvgAccordion,
	title: __( "Accordion", 'carbon-blocks' ),
	description: __( "", 'carbon-blocks' ),
	example: {
		innerBlocks: [
			{
				name: "carbon-blocks/accordion-item",
				attributes:{
					text:__("We accept credit card payments (Visa, MasterCard, American Express), PayPal, and bank transfers.", 'carbon-blocks' ),
					title: __("What payment methods do you accept ?", 'carbon-blocks' )
				}
			},
			{
				name: "carbon-blocks/accordion-item",
				attributes:{
					text:__("The delivery time depends on your location and the chosen shipping method. Generally, orders are delivered within 3 to 7 business days.", 'carbon-blocks' ),
					title: __("How long does it take to receive my order ?", 'carbon-blocks' )
				}
			},
			{
				name: "carbon-blocks/accordion-item",
				attributes:{
					text:__("upidatat enim do reprehenderit aliqua sit cillum cillum officia. Dolor sint deserunt laboris ipsum reprehenderit est labore nostrud consectetur nisi nulla.", 'carbon-blocks' ),
					title: __("Can I return a product if I'm not satisfied ?", 'carbon-blocks' ),
          isActive: false
				}
			}
		]
	},
	edit,
	save
} );
