// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgImageSlider from '/src/assets/block-icons/ImageSlider';
import Card1 from '/src/assets/images/base64/card-1';
import Card2 from '/src/assets/images/base64/card-2';

registerBlockType( 'carbon-blocks/image-slider', {
	icon: SvgImageSlider,
	title: __("Image slider", 'carbon-blocks' ),
	description: __("Create a slideshow to showcase your images. Customize navigation and style options for a visually engaging experience.", 'carbon-blocks' ),
	example: {
		viewportWidth: 1200,
		innerBlocks: [
			{
				name: "carbon-blocks/image-slide",
				attributes: {
					image: {
						id: 1,
						url: Card1
					}
				}
			},
			{
				name: "carbon-blocks/image-slide",
				attributes: {
					image: {
						id: 2,
						url: Card2
					}
				}
			}
		]
	},
	edit,
	save,
} );
