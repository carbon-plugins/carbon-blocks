<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Updater' ) ) :

	class Crbn_Blcks_Updater {

		private $plugin_name;
		private $plugin_slug;
		private $version;
		private $cache_key;
		private $cache_allowed;

		public function __construct( $plugin_slug, $plugin_name, $version ) {

			$this->plugin_name 		= $plugin_name;
			$this->plugin_slug 		= $plugin_slug;
			$this->version     		= $version;
			$this->cache_allowed 	= false;
			$this->cache_key 			= 'crbn_blcks_upd';

		}

		public function request() {

			$remote = get_transient( $this->cache_key );

			if( false === $remote || !$this->cache_allowed ) {

				$plugin_options = get_option( 'carbon_blocks_license' );

				$remote = wp_remote_get(
					add_query_arg(
						array(
							'license_key' => $plugin_options && urlencode( $plugin_options["key"] ),
							'is_active' 	=> $plugin_options && urlencode( $plugin_options["isActive"] )
						),
						'https://update.carbon-plugins.com/carbon-blocks/info.php'
					),
					array(
						'timeout' => 10,
						'headers' => array(
							'Accept' => 'application/json'
						)
					)
				);
				if(
					is_wp_error( $remote )
					|| 200 !== wp_remote_retrieve_response_code( $remote )
					|| empty( wp_remote_retrieve_body( $remote ) )
				) {
					return false;
				}

				set_transient( $this->cache_key, $remote, DAY_IN_SECONDS );

			}

			$remote = json_decode( wp_remote_retrieve_body( $remote ) );

			return $remote;
		}

		public function info( $res, $action, $args ) {

			if( 'plugin_information' !== $action ) {
				return $res;
			}

			if( $this->plugin_slug !== $args->slug ) {
				return $res;
			}

			$remote = $this->request();

			if( ! $remote ) {
				return $res;
			}

			$res = new stdClass();

			$res->name = $remote->name;
			$res->slug = $remote->slug;
			$res->version = $remote->version;
			$res->tested = $remote->tested;
			$res->requires = $remote->requires;
			$res->author = $remote->author;
			$res->author_profile = $remote->author_profile;
			$res->download_link = $remote->download_url;
			$res->trunk = $remote->download_url;
			$res->requires_php = $remote->requires_php;
			$res->last_updated = $remote->last_updated;

			$res->sections = array(
				'description' => $remote->sections->description,
				'installation' => $remote->sections->installation,
				'changelog' => $remote->sections->changelog
			);

			if( ! empty( $remote->banners ) ) {
				$res->banners = array(
					'low' => $remote->banners->low,
					'high' => $remote->banners->high
				);
			}

			return $res;

		}

		public function update( $transient ) {

			if ( empty($transient->checked ) ) {
				return $transient;
			}

			$remote = $this->request();

			if(
				$remote
				&& version_compare( $this->version, $remote->version, '<' )
				&& version_compare( $remote->requires, get_bloginfo( 'version' ), '<=' )
				&& version_compare( $remote->requires_php, PHP_VERSION, '<' )
			) {

				$res 							= new stdClass();
				$res->slug 				= $this->plugin_slug;
				$res->plugin 			= CRBN_BLCKS_BASENAME;
				$res->new_version = $remote->version;
				$res->tested 			= $remote->tested;
				$res->package 		= $remote->download_url;

				$transient->response[ $res->plugin ] = $res;

			}

			return $transient;

		}

		public function purge( $upgrader, $options ){
			if (
				$this->cache_allowed
				&& 'update' === $options['action']
				&& 'plugin' === $options[ 'type' ]
			) {
				delete_transient( $this->cache_key );
			}

		}

		public function update_message( $plugin_info_array, $plugin_info_object ) {
			if( empty( $plugin_info_array[ 'package' ] ) ) {
				/* translators: %s is replaced with the url of the page */
				echo sprintf( __( 'Please renew your license to allow updates. You can edit your license key <a target="_blank" href="%s">from here</a>.', 'carbon-blocks' ), home_url("/wp-admin/admin.php?page=carbon-blocks#/license"));
			}
		}

	}

endif;
