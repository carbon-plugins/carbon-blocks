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
					__( 'Carbon Plugins', $this->plugin_slug ),
					__( 'Carbon Plugins', $this->plugin_slug ),
					'manage_options',
					'carbon-plugins',
					array( $this, 'add_carbon_page' ),
					"none"
				);
			}

			add_submenu_page(
				'carbon-plugins',
				__( 'Carbon Blocks', $this->plugin_slug ),
				__( 'Carbon Blocks', $this->plugin_slug ),
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
			require_once CRBN_BLCKS_PATH . 'admin/'.$this->plugin_slug.'-dashboard.php';
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
				$deps_file  	 = require( $deps_file );
				$dependencies	= array_merge($dependencies, $deps_file['dependencies']);
				$version    	= $deps_file['version'];
			}

			global $pagenow;
			if (( $pagenow == 'admin.php' ) && (sanitize_text_field($_GET['page']) == 'carbon_blocks')) {
				if ( !wp_script_is( 'react-jsx-runtime', 'registered' ) ) {
					wp_register_script( 'react-jsx-runtime', CRBN_BLCKS_URL . 'admin/assets/react-jsx-runtime.js', [ 'react' ], '18.3.1', true );
				}

				wp_enqueue_style( $this->plugin_slug, CRBN_BLCKS_URL . 'src/admin/style-index.css', array('wp-components'), $version );
				wp_enqueue_script( $this->plugin_slug, CRBN_BLCKS_URL . 'src/admin/index.js', $dependencies, $version, true );
			}
			if (( $pagenow === 'admin.php' ) && (sanitize_text_field($_GET['page']) === "carbon-plugins" )) {
				wp_enqueue_style( $this->plugin_slug . 'dashboard', CRBN_BLCKS_URL . 'admin/assets/css/'.$this->plugin_slug.'-dashboard.min.css', array(), $this->version );
			}
			if (is_admin()) {
				wp_enqueue_style( $this->plugin_slug . '-admin', CRBN_BLCKS_URL . 'admin/assets/css/carbon-blocks-admin.min.css', array(), $this->version );
				if(crbn_blcks_is_gutenberg()) {
					if ( !wp_script_is( 'react-jsx-runtime', 'registered' ) ) {
						wp_register_script( 'react-jsx-runtime', CRBN_BLCKS_URL . 'admin/assets/react-jsx-runtime.js', [ 'react' ], '18.3.1', true );
					}
					wp_enqueue_script( $this->plugin_slug . '-gutenberg', CRBN_BLCKS_URL . 'admin/assets/js/'.$this->plugin_slug.'-gutenberg.min.js', array(), $this->version );
					wp_enqueue_style( $this->plugin_slug . '-gutenberg', CRBN_BLCKS_URL . 'admin/assets/css/'.$this->plugin_slug.'-gutenberg.min.css', array(), $this->version );
				}
			}

		}

	}

endif;
