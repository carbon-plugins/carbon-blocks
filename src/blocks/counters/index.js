// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgCounter from '/src/assets/block-icons/Counter';

registerBlockType( 'carbon-blocks/counters', {
	icon: SvgCounter,
	title: __("Counters", 'carbon-blocks' ),
	description: __("Display key information by incorporating an icon, a significant number, and descriptive text to highlight statistics, achievements, or any other essential elements.", 'carbon-blocks' ),
	example: {
		viewportWidth: 560,
		innerBlocks: [
			{
				name: "carbon-blocks/counter",
				attributes: {
					number:"35",
					text:"houses built",
					textColor: "black",
					numberColor: "black",
					style: {
						spacing: {
							blockGap: "10px"
						}
					}
				},
        innerBlocks: [
          {
            name: 'carbon-blocks/icons',
            attributes:{
              icon: {
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'/></svg>"
              },
              size: 35
            }
          }
        ]
			},
			{
				name: "carbon-blocks/counter",
				attributes: {
					number:"27",
					text:__("partners", "carbon-blocks"),
					textColor: "black",
					numberColor: "black",
					style: {
						spacing: {
							blockGap: "10px"
						}
					}
				},
        innerBlocks: [
          {
            name: 'carbon-blocks/icons',
            attributes:{
              icon: {
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M18 18.72a9.094 9.094 0 0 0 3.741-.479a3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72a8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z'/></svg>"
              },
              size: 35
            }
          }
        ]
			},
			{
				name: "carbon-blocks/counter",
				attributes: {
					number: "10",
					text: __( "years of experience", "carbon-blocks" ),
					textColor: "black",
					numberColor: "black",
					style: {
						spacing: {
							blockGap: "10px"
						}
					}
				},
        innerBlocks: [
          {
            name: 'carbon-blocks/icons',
            attributes:{
              icon: {
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'/></svg>"
              },
              size: 35
            }
          }
        ]
			}
		],
		viewportWidth: 1200
	},
	edit,
	save,
} );
