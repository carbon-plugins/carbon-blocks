// WordPress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies
import './style.scss';
import edit from './edit';
import save from './save';
import SvgTestimonialSlider from '/src/assets/block-icons/TestimonialSlider';
import User1 from "/src/assets/images/base64/user-1"

registerBlockType( 'carbon-blocks/testimonial-slider', {
	icon: SvgTestimonialSlider,
	title: __( "Testimonial slider", 'carbon-blocks' ),
	description: __( "Present testimonials from satisfied clients in the form of a slideshow.", 'carbon-blocks' ),
	example: {
		viewportWidth: 1200,
    innerBlocks: [
      {
        name: "carbon-blocks/testimonial",
        attributes: {
					isSlide: true,
          style: {
            color: {
              text: "black"
            }
          }
        },
        innerBlocks: [
					{
						name: "core/heading",
						attributes: {
							textAlign: "center",
							level: 3,
							content: __( "The legend of customer service", "carbon-blocks" )
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content: __("They solved my problem with so much joy that I almost forgot why I contacted them. I'm thinking of writing a book about their customer service – it would be worth it !", "carbon-blocks")
						}
					},
          {
            name: "carbon-blocks/signature",
            attributes: {
              position: __("Customer", "carbon-blocks"),
              name: __("John Smith", "carbon-blocks")
            },
            innerBlocks: [
              {
                name: "carbon-blocks/advanced-avatar",
                attributes: {
                  type: "initials",
                  initials: {
                    value: __("John Smith", "carbon-blocks"),
                    color: "white"
                  }
                }
              }
            ]
          }
        ]
      },
      {
        name: "carbon-blocks/testimonial",
        attributes: {
					isSlide: true,
          style: {
            color: {
              text: "black"
            }
          }
        },
        innerBlocks: [
					{
						name: "core/heading",
						attributes: {
							textAlign: "center",
							level: 3,
							content: __( "Gadget paradise", "carbon-blocks" )
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content: __("From smartphones to smartwatches, this store has it all. Their knowledgeable staff helped me find the perfect tech gear.", "carbon-blocks")
						}
					},
          {
            name: "carbon-blocks/signature",
            attributes: {
              position: __("Customer", "carbon-blocks"),
              name: __("David Martinez", "carbon-blocks")
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
            ]
          }
        ]
      },
      {
        name: "carbon-blocks/testimonial",
        attributes: {
					isSlide: true,
          style: {
            color: {
              text: "black"
            }
          }
        },
        innerBlocks: [
					{
						name: "core/heading",
						attributes: {
							textAlign: "center",
							level: 3,
							content: __( "Fresh market", "carbon-blocks" )
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content: __("The produce here is always fresh and the staff is so friendly. I look forward to my weekly shopping trips !", "carbon-blocks")
						}
					},
          {
            name: "carbon-blocks/signature",
            attributes: {
              position: __("Customer", "carbon-blocks"),
              name: __("Sarah Johnson", "carbon-blocks")
            },
            innerBlocks: [
              {
                name: "carbon-blocks/advanced-avatar",
                attributes: {
                  type: "shape"
                }
              }
            ]
          }
        ]
      }
    ]
	},
	edit,
	save,
} );
