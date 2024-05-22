// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgCard from '/src/assets/block-icons/Card';
import Card1 from '/src/assets/images/base64/card-1';

registerBlockType( 'carbon-blocks/card', {
	icon: SvgCard,
	title: __("Card", 'carbon-blocks' ),
	description: __("Craft a card by customizing the title, text, and image to highlight important information.", 'carbon-blocks' ),
	example: {
    attributes: {
			showSeeMore: false
    },
    innerBlocks: [
      {
        name: 'carbon-blocks/advanced-image',
        attributes: {
          id: 0,
          url: Card1,
          alt: "",
          description: "",
          height: "100%",
          width: "100%"
        }
      },
			{
				name: "core/heading",
				attributes: {
					textAlign: "center",
					content:  __( "Escape to paradise", "carbon-blocks" ),
					level: 3
				}
			},
			{
				name: "core/paragraph",
				attributes: {
					align: "center",
					content: __( "Discover our dream vacation rentals in exotic destinations. From the beach to the mountains, find the perfect getaway for unforgettable holidays.", "carbon-blocks")
				}
			},
    ]
	},
	edit,
	save,
} );
