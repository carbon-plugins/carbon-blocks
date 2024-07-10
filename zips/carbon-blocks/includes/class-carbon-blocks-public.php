<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Public' ) ) :

	class Crbn_Blcks_Public {

		/**
		 * Initialize the class and set its properties.
		 *
		 * @since    1.0.0
		 * @param    string $plugin_slug - The slug of this plugin.
		 * @param    string $plugin_name - The name of this plugin.
		 * @param    string $version - The version of this plugin.
		 */
		public function __construct( $plugin_slug, $plugin_name, $version ) {
			$this->plugin_slug = $plugin_slug;
			$this->plugin_name = $plugin_name;
			$this->version     = $version;
		}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		if ( function_exists('has_block') ) {
			if ( has_block( 'carbon-blocks/logo-slider' )
				|| has_block( 'carbon-blocks/testimonial-slider' )
				|| has_block( 'carbon-blocks/taxonomy-slider' )
				|| has_block( 'carbon-blocks/vertical-slider' )
				|| has_block( 'carbon-blocks/thumb-slider' )
				|| has_block( 'carbon-blocks/block-slider' )
				|| has_block( 'carbon-blocks/image-slider'  )
			) {
				wp_enqueue_style( $this->plugin_slug . '-slider', CRBN_BLCKS_URL . 'public/assets/vendor/carbon-plugins-slider/carbon-plugins-slider.min.css', array(), $this->version );
			}
		} else {
			wp_enqueue_style( $this->plugin_slug . '-slider', CRBN_BLCKS_URL . 'public/assets/vendor/carbon-plugins-slider/carbon-plugins-slider.min.css', array(), $this->version );
		}

    if ( ! is_admin() ) {
			wp_enqueue_style( $this->plugin_name, CRBN_BLCKS_URL . 'public/assets/css/carbon-blocks-public.min.css', array(), $this->version, false );
		}

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		if ( function_exists('has_block') ) {
			if ( has_block( 'carbon-blocks/logo-slider' )
				|| has_block( 'carbon-blocks/testimonial-slider' )
				|| has_block( 'carbon-blocks/taxonomy-slider' )
				|| has_block( 'carbon-blocks/vertical-slider' )
				|| has_block( 'carbon-blocks/thumb-slider' )
				|| has_block( 'carbon-blocks/block-slider' )
				|| has_block( 'carbon-blocks/image-slider'  )
			) {
				wp_enqueue_script(
					$this->plugin_slug . '-slider',
					CRBN_BLCKS_URL . 'public/assets/vendor/carbon-plugins-slider/carbon-plugins-slider.min.js',
					array(),
					$this->version,
					array(
						'in_footer' => true,
						'strategy'  => 'defer'
					)
				);
			}
			if( has_block( 'carbon-blocks/advanced-avatar') ) {
				if ( !wp_script_is( 'react-jsx-runtime', 'registered' ) ) {
					wp_register_script( 'react-jsx-runtime', CRBN_BLCKS_URL . 'admin/assets/react-jsx-runtime.js', [ 'react' ], '18.3.1', true );
				}
			}
		} else {
			wp_enqueue_script(
				$this->plugin_slug . '-slider',
				CRBN_BLCKS_URL . 'public/assets/vendor/carbon-plugins-slider/carbon-plugins-slider.min.js',
				array(),
				$this->version,
				array(
					'in_footer' => true,
					'strategy'  => 'defer'
				)
			);
			if ( !wp_script_is( 'react-jsx-runtime', 'registered' ) ) {
				wp_register_script( 'react-jsx-runtime', CRBN_BLCKS_URL . 'admin/assets/react-jsx-runtime.js', [ 'react' ], '18.3.1', true );
			}
		}

		wp_enqueue_script(
			$this->plugin_name,
			CRBN_BLCKS_URL . 'public/assets/js/carbon-blocks-public.min.js',
			array(),
			$this->version,
			array(
				'in_footer' => true,
				'strategy'  => 'defer'
			)
		);

	}

}

endif;
