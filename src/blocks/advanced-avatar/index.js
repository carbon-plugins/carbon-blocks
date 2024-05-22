// External dependencies
import palettes from 'nice-color-palettes';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import IconAdvancedAvatar from '/src/assets/block-icons/AdvancedAvatar';

const randomNumber = Math.floor(Math.random() * 101);

registerBlockType( 'carbon-blocks/advanced-avatar', {
	icon: IconAdvancedAvatar,
	title: __( "Advanced avatar", 'carbon-blocks-pro' ),
	description: __( "Showcase unique avatars by choosing from various shapes, importing a photo, or using initials.", 'carbon-blocks-pro' ),
	example: {
    attributes: {
			palette: palettes[randomNumber],
      style:{
        spacing:{
          margin:{
            left: "auto",
            right: "auto"
          }
        },
				border: {
					radius: "100px"
				}
      }
    },
    innerBlocks: [],
	},
	edit,
	save,
} );
