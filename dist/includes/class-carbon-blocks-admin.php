<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Admin' ) ) :

	class Crbn_Blcks_Admin {

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
		 * Add Admin Page Menu page.
		 *
		 * @since    1.0.0
		 */
		public function create_admin_menu() {

			if( !menu_page_url( 'carbon-plugins', false ) ) {
				add_menu_page(
					__( 'Carbon Plugins', 'carbon-blocks' ),
					__( 'Carbon Plugins', 'carbon-blocks' ),
					'manage_options',
					'carbon-plugins',
					array( $this, 'add_carbon_page' ),
					"none"
				);
			}

			add_submenu_page(
				'carbon-plugins',
				__( 'Carbon Blocks', 'carbon-blocks' ),
				__( 'Carbon Blocks', 'carbon-blocks' ),
				'manage_options',
				'carbon_blocks',
				array( $this, 'add_root' ),
			);
		}

		/**
		 * Add Root Div For React.
		 *
		 * @since    1.0.0
		 */
		public function add_root() {
			echo '<section id="carbon-blocks"></section>';
		}

		public function add_carbon_page() {
			require_once CRBN_BLCKS_PATH . 'admin/carbon-blocks-dashboard.php';
		}

		/**
		 * Register the CSS/JavaScript Resources for the admin area.
		 *
		 * Use Condition to Load it Only When it is Necessary
		 *
		 * @since    1.0.0
		 */
		public function enqueue_resources() {

			$deps_file = CRBN_BLCKS_PATH . 'src/admin/index.asset.php';
			$dependencies = ['wp-api'];
			$version = $this->version;
			if ( file_exists( $deps_file ) ) {
				$deps_file  = require( $deps_file );
				$dependency = $deps_file['dependencies'];
				$version    = $deps_file['version'];
			}

			global $pagenow;
			if (( $pagenow == 'admin.php' ) && (sanitize_text_field($_GET['page']) == 'carbon_blocks')) {
				wp_enqueue_style( $this->plugin_slug, CRBN_BLCKS_URL . 'src/admin/style-index.css', array('wp-components'), $this->version );
				wp_enqueue_script( $this->plugin_slug, CRBN_BLCKS_URL . 'src/admin/index.js', $dependency, $this->version, true );
			}
			if (( $pagenow === 'admin.php' ) && (sanitize_text_field($_GET['page']) === "carbon-plugins" )) {
				wp_enqueue_style( $this->plugin_slug . 'dashboard', CRBN_BLCKS_URL . 'admin/assets/carbon-blocks-dashboard.min.css', array(), $this->version );
			}
			if (is_admin()) {
				wp_enqueue_style( $this->plugin_slug . '-admin', CRBN_BLCKS_URL . 'admin/assets/carbon-blocks-admin.min.css', array(), $this->version );
				if(crbn_blcks_is_gutenberg()) {
					wp_enqueue_script( $this->plugin_slug . '-gutenberg', CRBN_BLCKS_URL . 'admin/assets/carbon-blocks-gutenberg.min.js', array(), $this->version );
					wp_enqueue_style( $this->plugin_slug . '-gutenberg', CRBN_BLCKS_URL . 'admin/assets/carbon-blocks-gutenberg.min.css', array(), $this->version );
				}
			}

		}

	}

endif;
