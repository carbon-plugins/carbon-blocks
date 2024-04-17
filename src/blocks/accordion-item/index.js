// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgAccordionItem from '/src/assets/block-icons/AccordionItem';

registerBlockType( 'carbon-blocks/accordion-item', {
	icon: SvgAccordionItem,
	title: __("Accordion item", 'carbon-blocks' ),
	description: __("", 'carbon-blocks' ),
	example: {
    attributes: {
      title: __("What payment methods do you accept ?", 'carbon-blocks' ),
      text: __("We accept credit card payments (Visa, MasterCard, American Express), PayPal, and bank transfers.", 'carbon-blocks' )
    }
	},
	edit,
	save,
} );
