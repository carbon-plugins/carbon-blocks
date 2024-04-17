// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgMasonry from '/src/assets/block-icons/Masonry';

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
          url:"https://picsum.photos/id/12/400/300"
        },
        {
          url:"https://picsum.photos/id/733/400/300",
          caption: __("A beautiful sky", "carbon-blocks")
        },
        {
          url:"https://picsum.photos/id/77/300/500"
        },
        {
          url:"https://picsum.photos/id/58/300/500"
        },
        {
          url:"https://picsum.photos/id/29/400/300"
        },
        {
          url:"https://picsum.photos/id/277/300/400",
          caption: __("It's windy !", "carbon-blocks")
        },
        {
          url:"https://picsum.photos/id/15/400/300"
        },
        {
          url:"https://picsum.photos/id/324/400/300"
        }
      ],
    }
	},
	edit,
	save,
} );
