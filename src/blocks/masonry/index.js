// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgMasonry from '/src/assets/block-icons/Masonry';
import Masonry1 from '/src/assets/images/base64/masonry-1';
import AdvancedImage from '/src/assets/images/base64/advanced-image';
import Masonry3 from '/src/assets/images/base64/masonry-3';
import Masonry4 from '/src/assets/images/base64/masonry-4';
import Masonry5 from '/src/assets/images/base64/masonry-5';
import Masonry6 from '/src/assets/images/base64/masonry-6';
import Masonry7 from '/src/assets/images/base64/masonry-7';
import Masonry8 from '/src/assets/images/base64/masonry-8';

registerBlockType( 'carbon-blocks/masonry', {
	icon: SvgMasonry,
	title: __( "Masonry", 'carbon-blocks' ),
	description: __( "Display your images uniquely with this dynamic formatting.", 'carbon-blocks' ),
	example: {
		viewportWidth: 1200,
    attributes: {
      showCaption: true,
      columns: 3,
			allowZoom: false,
      images: [
        {
          url: Masonry1
        },
        {
          url: AdvancedImage,
          caption: __("A beautiful sky", "carbon-blocks")
        },
        {
          url: Masonry3
        },
        {
          url: Masonry4
        },
        {
          url: Masonry5
        },
        {
          url: Masonry6,
          caption: __("It's windy !", "carbon-blocks")
        },
        {
          url: Masonry7
        },
        {
          url: Masonry8
        }
      ],
    }
	},
	edit,
	save,
} );
