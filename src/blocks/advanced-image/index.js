// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgAdvancedImage from '/src/assets/block-icons/AdvancedImage';
import AdvancedImage from '/src/assets/images/base64/advanced-image';

registerBlockType( 'carbon-blocks/advanced-image', {
	icon: SvgAdvancedImage,
	title: __( "Advanced image", 'carbon-blocks' ),
	description: __( "Display your images and customize their sizes, styles, and effects to add a unique touch to your visuals.", 'carbon-blocks' ),
	example: {
    attributes: {
      id: 0,
      url: AdvancedImage,
      alt: __( "A beautiful sky with clouds", "carbon-blocks" ),
      caption: __( "A beautiful sky with clouds", "carbon-blocks" ),
      description: "",
      height: "100%",
      width: "100%",
      showCaption: true
    }
	},
	edit,
	save
} );
