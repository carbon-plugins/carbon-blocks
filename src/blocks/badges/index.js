// External dependencies';

// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgBadges from '/src/assets/block-icons/Badges';

registerBlockType( 'carbon-blocks/badges', {
	icon: SvgBadges,
	title: __( "Badges", 'carbon-blocks' ),
	description: __( "Display elegant badges featuring an icon and text, perfect for highlighting labels, tags, or other distinctive elements.", 'carbon-blocks' ),
	example: {
		viewportWidth: 360,
		innerBlocks: [
			{
				name: "carbon-blocks/badge",
				attributes: {
					badgeContent: __( "On sale !", "carbon-blocks" )
				},
				innerBlocks: [
					{
						name: "carbon-blocks/icons",
						attributes: {
							size: 20,
							icon: {
								svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5l-3.75 1.5l-3.75-1.5l-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Z"></path></svg>',
							},
							style: {
								color: {
									text: "black"
								},
							}
						}
					}
				]
			},
			{
				name: "carbon-blocks/badge",
				attributes: {
					badgeContent: __( "Ends soon !", "carbon-blocks" )
				},
				innerBlocks: [
					{
						name: "carbon-blocks/icons",
						attributes: {
							size: 20,
							icon: {
								svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path></svg>',
							},
							style: {
								color: {
									text: "black"
								},
							}
						}
					}
				]
			}
		]
	},
	edit,
	save,
} );
