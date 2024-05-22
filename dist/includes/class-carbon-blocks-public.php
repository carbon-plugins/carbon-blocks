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

		if ( function_exists('has_block') && (
			has_block( 'carbon-blocks/logo-slider' )
			|| has_block( 'carbon-blocks/testimonial-slider' )
			|| has_block( 'carbon-blocks/taxonomy-slider' )
			|| has_block( 'carbon-blocks/block-slider' )
			|| has_block( 'carbon-blocks/image-slider'  )
		) ) {
			wp_enqueue_style( $this->plugin_slug . '-slider', CRBN_BLCKS_URL . 'public/assets/vendor/slider.min.css', array(), $this->version );
		}

    if ( ! is_admin() ) {
			wp_enqueue_style( $this->plugin_name, CRBN_BLCKS_URL . 'public/assets/carbon-blocks-public.min.css', array(), $this->version, false );
		}

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		if ( function_exists('has_block') && (
			has_block( 'carbon-blocks/logo-slider' )
			|| has_block( 'carbon-blocks/testimonial-slider' )
			|| has_block( 'carbon-blocks/taxonomy-slider' )
			|| has_block( 'carbon-blocks/block-slider' )
			|| has_block( 'carbon-blocks/image-slider'  )
		) ) {
			wp_enqueue_script( $this->plugin_slug . '-slider', CRBN_BLCKS_URL . 'public/assets/vendor/slider.min.js', array(), $this->version, true);
		}

    if ( ! is_admin() ) {
			wp_enqueue_script( $this->plugin_name, CRBN_BLCKS_URL . 'public/assets/carbon-blocks-public.min.js', array(), $this->version, false );
		}

	}

}

endif;
