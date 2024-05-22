<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Rest_Route' ) ) :

	class Crbn_Blcks_Rest_Route {
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
			$this->version     = "1.0.0";
			$this->option_name = 'carbon_blocks';
			$this->defaults = array(
				'version'	=> $this->version,
				'options' => array(
					"deleteAllOnRemove" => false,
					"tourIsFinished"		=> false,
					"hasThemeJson" 			=> wp_theme_has_theme_json()
				),
				'license' => array(
					"isActive"		=> false,
					'key' 				=> ""
				)
			);
			$this->response = $this->defaults;

			$current_version = get_option( 'carbon_blocks_version' );

			$options = array(
				array(
					'slug' => 'options',
					'items' => array(
						"deleteAllOnRemove",
						"tourIsFinished",
						"hasThemeJson"
					),
					'current' => get_option( 'carbon_blocks_options' ),
				),
				array(
					'slug' => 'license',
					'items' => array(
						"isActive",
						'key'
					),
					'current' => get_option( 'carbon_blocks_license' ),
				)
			);

			foreach ($options as $option) {
				if(!$option['current'] || empty($option['current'])) {
					// Options does not exists in database, so we add it
					update_option( 'carbon_blocks_' . $option['slug'], $this->defaults[$option['slug']] );
				} else {
					// Everything exists in database, so we update the response if the version is different (> or <)
					if(count($option['items']) > 0 && (version_compare($current_version, $this->version, '<') || version_compare($current_version, $this->version, '>'))) {
						$updated_options = array();
						foreach ($option['items'] as $item) {
							$updated_options[$item] = $this->get_setting($option['current'], $item, $option['slug']);
						}
						$this->response[$option['slug']] = $updated_options;
						update_option( 'carbon_blocks_' . $option['slug'], $this->response[$option['slug']] );
					} else {
						// Or we just update the response with the current options
						$this->response[$option['slug']] = $option['current'];
					}
				}
			}

			if(version_compare($current_version, $this->version, '<') || version_compare($current_version, $this->version, '>')) {
				update_option( 'carbon_blocks_version', $this->version );
			}

		}

		/**
		 * Get the current value if it exists, otherwise returns the default value.
		 *
		 * @since    1.0.0
		 * @param    string $options	- The array containing the options.
		 * @param    string $option		- The item label to update inside the array.
		 * @param    string $array 		- The array inside the defaults to get the value from.
		 */
		public function get_setting( $options, $option, $array ) {
			if( $options[$option] ) {
				return $options[$option];
			} else {
				return $this->defaults[$array][$option];
			}
		}

		/**
		 * The function `create_rest_routes` registers two REST routes for the `/blocks` endpoint in the
		 * `carbon-plugins/v1` namespace, one for GET requests and one for POST requests.
		 */
		public function create_rest_routes() {
			register_rest_route( 'carbon-plugins/v1', '/blocks', [
				'methods' => 'GET',
				'callback' => [ $this, 'get_settings' ],
				'permission_callback' => [ $this, 'get_settings_permission' ]
			] );
			register_rest_route( 'carbon-plugins/v1', '/blocks', [
				'methods' => 'POST',
				'callback' => [ $this, 'save_settings' ],
				'permission_callback' => [ $this, 'save_settings_permission' ]
			] );
		}

		/**
		 * The function "get_settings" returns a response after including and returning the contents of a local
		 * file.
		 *
		 * @return the response wrapped in a rest_ensure_response() function.
		 */
		public function get_settings() {
			function crbn_blcks_get_local_file_contents( $file_path ) {
				ob_start();
				include $file_path;
				$contents = ob_get_clean();
				return $contents;
			}
			return rest_ensure_response( $this->response );
		}

		/**
		 * The function saves settings and license information and returns a success response.
		 *
		 * @param req The parameter `` is an array that contains the data to be saved. It is expected to
		 * have two keys: `options` and `license`. The value of `options` is the settings/options data that
		 * needs to be saved, and the value of `license` is the license data that
		 *
		 * @return a response with the value 'success'.
		 */
		public function save_settings( $req ) {
			update_option( $this->option_name . '_options',     $req['options'] );
			update_option( $this->option_name . '_license',     $req['license'] );
			// update_option( $this->option_name . '_blocks',    	$req['blocks'] );
			return rest_ensure_response( 'success' );
		}

		/**
		 * The function "define_settings" updates the options and license values in the plugin's settings.
		 */
		public function define_settings() {
			update_option( $this->option_name . '_options',     $this->response['options'] );
			update_option( $this->option_name . '_license',     $this->response['license'] );
			// update_option( $this->option_name . '_blocks',    	$this->response['blocks'] );
		}

		/**
		 * The function checks if the current user has the permission to publish posts.
		 *
		 * @return the result of the current_user_can() function, which is a boolean value indicating whether
		 * the current user has the 'publish_posts' capability.
		 */
		public function save_settings_permission() {
			return current_user_can( 'publish_posts' );
		}

		/**
		 * The function "get_settings_permission" returns true.
		 *
		 * @return true
		 */
		public function get_settings_permission() {
			return true;
		}

	}

endif;
