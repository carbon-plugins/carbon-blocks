// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgCards from '/src/assets/block-icons/Cards';
import Card1 from '/src/assets/images/base64/card-1';
import Card2 from '/src/assets/images/base64/card-2';

registerBlockType( 'carbon-blocks/cards', {
	icon: SvgCards,
	title: __("Cards", 'carbon-blocks' ),
	description: __("Create cards by customizing the title, text, and image to highlight important information.", 'carbon-blocks' ),
	example: {
		viewportWidth: 1200,
		innerBlocks: [
			{
				name: "carbon-blocks/card",
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
			{
				name: "carbon-blocks/card",
				attributes: {
					showSeeMore: false
				},
				innerBlocks: [
					{
						name: 'carbon-blocks/advanced-image',
						attributes: {
							id: 0,
							url: Card2,
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
							content:  __( "Journey to the Heart of the City", "carbon-blocks" ),
							level: 3
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							align: "center",
							content: __( "Experience the vibrant pulse of major cities around the world. From historic neighborhoods to trendy districts, immerse yourself in a captivating urban experience.", "carbon-blocks")
						}
					},
				]
			},
		],
	},
	styles: [
    {
			name: 'default',
			label: __( 'Default', 'carbon-blocks' ),
      isDefault: true,
    },
    {
			name: 'modern',
			label: __( 'Modern', 'carbon-blocks' ),
			attributes: {
				color: "var(--carbon-button-primary)"
			},
    },
	],
	edit,
	save,
} );
