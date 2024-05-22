// External dependencies

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import Edit from './edit';
import save from './save';
import SvgSignature from '/src/assets/block-icons/Signature';
import User1 from "/src/assets/images/base64/user-1"

registerBlockType( 'carbon-blocks/signature', {
	icon: SvgSignature,
	title: __( "Signature", 'carbon-blocks-pro' ),
	description: __( "Add a personalized signature at the end of your publications.", 'carbon-blocks-pro' ),
	example: {
    attributes: {
      position: __("CEO", "carbon-blocks-pro"),
      name: __("John Smith", "carbon-blocks-pro"),
      style: {
        color: {
          text: "black"
        }
      }
    },
    innerBlocks: [
      {
        name: "carbon-blocks/advanced-avatar",
        attributes: {
          type: "image",
          image: {
            url: User1
          }
        }
      }
    ],

	},
	edit: Edit,
	save,
} );
