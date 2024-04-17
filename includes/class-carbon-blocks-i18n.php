<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_i18n' ) ) :

	class Crbn_Blcks_i18n {

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
		* Sets the locale for the Crbn_Blcks plugin
		*
		* @since 1.0.0
		* @return void
		*/
	public function set_locale() {
		load_plugin_textdomain( $this->plugin_slug , false, dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages' );
	}

	/**
		* Sets translations for the Crbn_Blcks plugin js scripts
		*
		* @since 1.0.0
		* @return void
		*/
	public function set_tranlsations() {
		// Admin page translation
		wp_set_script_translations( $this->plugin_slug, $this->plugin_slug, CRBN_BLCKS_PATH . 'languages/' );
		// Block translation
		wp_set_script_translations( "carbon-blocks-blocks-editor-script", $this->plugin_slug, CRBN_BLCKS_PATH . 'languages/' );
	}

	}

endif;
