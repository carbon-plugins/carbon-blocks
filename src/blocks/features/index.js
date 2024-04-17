// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgFeatures from '/src/assets/block-icons/Features';

registerBlockType( 'carbon-blocks/features', {
	icon: SvgFeatures,
	title: __("Features", 'carbon-blocks' ),
	description: __("Highlight various key points with the formatting of your choice.", 'carbon-blocks' ),
	example: {
		attributes: {
			className:"is-style-icon-titre-texte"
		},
		innerBlocks: [
			{
				name: "carbon-blocks/feature",
				attributes: {
					showIcon:true,
					showActions:false
				},
				innerBlocks: [
					{
						name:"carbon-blocks/icons",
						attributes: {
              icon: {
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819'/></svg>"
              },
              style: {
                color: {
                  text: "black"
                },
              },
              size: 40
						}
					},
          {
            name: 'core/heading',
            attributes: {
              content: "Find your next home",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          },
          {
            name: 'core/paragraph',
            attributes: {
              content: "Explore thousands of properties for sale or rent. From apartments to houses, find your ideal home in just a few clicks.",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          },
          {
            name: "carbon-blocks/advanced-buttons",
            innerBlocks: [
              {
                name: 'carbon-blocks/advanced-button',
                attributes: {
                  text: __('Discover', 'carbon-blocks'),
                  style: {
                    color: {
                      background: "white",
                      text: "black"
                    },
                    spacing: {
                      padding: {
                        top: "5px",
                        right: "15px",
                        bottom: "5px",
                        left: "15px"
                      },
                      blockGap: "10px"
                    },
                    border: {
                      color: "black",
                      style: "solid",
                      width: "1px",
                    }
                  }
                },
                innerBlocks: [
                  {
                    name: 'carbon-blocks/icons',
                    attributes:{
                      icon: {
                        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'><path fill='currentColor' d='m8 6l6 4.03L8 14V6z'/></svg>"
                      },
                      size: 30
                    }
                  }
                ]
              }
            ]
          }
				]
			},
      {
				name: "carbon-blocks/feature",
				attributes: {
					showIcon:false,
					showActions:false
				},
				innerBlocks: [
          {
            name: 'core/heading',
            attributes: {
              content: "Find your next home",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          },
          {
            name: 'core/paragraph',
            attributes: {
              content: "Explore thousands of properties for sale or rent. From apartments to houses, find your ideal home in just a few clicks.",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          },
          {
            name: "carbon-blocks/advanced-buttons",
            innerBlocks: [
              {
                name: 'carbon-blocks/advanced-button',
                attributes: {
                  text: __('Discover', 'carbon-blocks'),
                  style: {
                    color: {
                      background: "white",
                      text: "black"
                    },
                    spacing: {
                      padding: {
                        top: "5px",
                        right: "15px",
                        bottom: "5px",
                        left: "15px"
                      },
                      blockGap: "10px"
                    },
                    border: {
                      color: "black",
                      style: "solid",
                      width: "1px",
                    }
                  }
                },
                innerBlocks: [
                  {
                    name: 'carbon-blocks/icons',
                    attributes:{
                      icon: {
                        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'><path fill='currentColor' d='m8 6l6 4.03L8 14V6z'/></svg>"
                      },
                      size: 30
                    }
                  }
                ]
              }
            ]
          }
				]
			},
      {
				name: "carbon-blocks/feature",
				attributes: {
					showIcon:true,
					showActions:false,
          showSeeMore: false
				},
				innerBlocks: [
					{
						name:"carbon-blocks/icons",
						attributes: {
              icon: {
                svg: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819'/></svg>"
              },
              style: {
                color: {
                  text: "black"
                },
              },
              size: 40
						}
					},
          {
            name: 'core/heading',
            attributes: {
              content: "Find your next home",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          },
          {
            name: 'core/paragraph',
            attributes: {
              content: "Explore thousands of properties for sale or rent. From apartments to houses, find your ideal home in just a few clicks.",
              style: {
                color: {
                  text: "black"
                }
              }
            }
          }
				]
			}
		],
		viewportWidth: 1200
	},
	edit,
	save
} );
