<?php

/**
 * @link              https://carbon-plugins.com/
 * @since             1.0.0
 * @package           Carbon Blocks
 *
 * @wordpress-plugin
 * Plugin Name:       Carbon Blocks
 * Plugin URI:    		https://carbon-plugins.com/carbon-blocks/
 * Description:				Add a powerful block library to extend your Gutenberg editor
 * Version:           1.0.0
 * Author:            Mateo Pommier
 * Author URI:        https://carbon-plugins.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       carbon-blocks
 * Domain Path:       /languages
 */

// die if accessed directly.
if ( !defined( 'ABSPATH' ) ) die;

/**
 * Checks if the pro version is already activated
 *
 * @return void
 */
function crbn_blcks_activate_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-carbon-blocks-activator.php';
	Crbn_Blcks_Activator::activate();
}
register_activation_hook( __FILE__, 'crbn_blcks_activate_plugin' );

add_action( 'pre_current_active_plugins', function() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-carbon-blocks-activator.php';
	Crbn_Blcks_Activator::display_activation_error_message();
});

if( ! class_exists('Crbn_Blcks') ) {

	class Crbn_Blcks {

		protected $loader;
		public $plugin_name  	= 'carbon_blocks';
		public $plugin_slug 	= 'carbon-blocks';
		public $version 			= '1.0.0';
		public $settings 			= array();

		function __construct() {
			// Do nothing.
		}

		function init() {

			$this->define( 'CRBN_BLCKS_NAME', 	  	$this->plugin_name );
			$this->define( 'CRBN_BLCKS_SLUG', 			$this->plugin_slug );
			$this->define( 'CRBN_BLCKS_VERSION', 	$this->version );
			$this->define( 'CRBN_BLCKS_BASENAME',  plugin_basename( __FILE__ ) );
			$this->define( 'CRBN_BLCKS_PATH',			plugin_dir_path( __FILE__ ) );
			$this->define( 'CRBN_BLCKS_URL', 			plugin_dir_url( __FILE__ ) );

			$this->settings = array(
				"plugin_name" 		=> CRBN_BLCKS_NAME,
				"plugin_basename" => CRBN_BLCKS_BASENAME,
				"plugin_slug" 		=> CRBN_BLCKS_SLUG,
				"plugin_version"	=> CRBN_BLCKS_VERSION
			);

			include_once( CRBN_BLCKS_PATH . 'includes/carbon-blocks-helpers.php');

			crbn_blcks_include( 'includes/class-carbon-blocks-activator.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-loader.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-i18n.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-register.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-updater.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-rest-route.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-admin.php' );
			crbn_blcks_include( 'includes/class-carbon-blocks-public.php' );

			$this->loader = new Crbn_Blcks_Loader();

			$this->register_rest_route();
			$this->register_admin_hooks();
			$this->register_block_hooks();
			$this->register_public_hooks();
			$this->translate();

			$this->loader->run();

		}

		/**
		 * Get a setting from the Crbn_Blcks class
		 *
		 * @since  1.0.0
		 * @param  string $setting
		 * @return mixed
		 */
		public function get( $setting ) {
			if ( !$this->settings[$setting] ) return;
			return $this->settings[$setting];
		}

		/**
		 * Define a global variable
		 *
		 * @since  1.0.0
		 * @param  string $name
		 * @param  mixed $value
		 * @return void
		 */
		public function define( $name, $value = true ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		private function register_rest_route() {
			$rest_api = new Crbn_Blcks_Rest_Route( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'rest_api_init', $rest_api, 'create_rest_routes' );
		}

		/**
		 * Creates and sets up various hooks for the admin menu, admin
		 * scripts, translations, and REST API routes.
		*
		* @since 1.0.0
		* @return void
		*/
		private function register_admin_hooks() {
			$plugin_admin = new Crbn_Blcks_Admin( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'admin_menu', 						$plugin_admin, 'create_admin_menu' );
			$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_resources' );
		}

		/**
	  * Creates and sets up various hooks for the front
		*
		* @since 1.0.0
		* @return void
		*/
		private function register_public_hooks() {
			$plugin_public = new Crbn_Blcks_Public( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
			$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		}

		/**
		 * Creates and sets up various hooks for the admin menu, admin
		 * scripts, translations, and REST API routes.
		*
		* @since 1.0.0
		* @return void
		*/
		private function translate() {
			$i18n = new Crbn_Blcks_i18n( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'init', 									$i18n, 'set_locale' );
			$this->loader->add_action( 'admin_enqueue_scripts', $i18n, 'set_tranlsations', 100 );
		}

		/**
		 * initializes the Crbn_Blcks_Register class and adds two actions to load
		 * blocks and plugins.

		* @since 1.0.0
		* @return void
		*/
		private function register_block_hooks() {
			$this->plugin_register = new Crbn_Blcks_Register( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_filter(  'render_block', 					 $this->plugin_register,   'add_data_animation', 10, 2 );
			$this->loader->add_action( 'init', 										$this->plugin_register, 	'load_blocks' );
			$this->loader->add_action( 'admin_enqueue_scripts', 	$this->plugin_register, 	'load_plugins' );
			$this->loader->add_action( 'block_categories_all', 		$this->plugin_register, 	'define_blocks_categorie' );
		}

	}

	/**
	 * Removethe Carbon Blocks plugin data
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function crbn_blcks_uninstall_plugin() {
		require_once CRBN_BLCKS_PATH . 'includes/class-carbon-blocks-uninstaller.php';
		Crbn_Blcks_Uninstaller::uninstall();
	}
	register_uninstall_hook( __FILE__, 'crbn_blcks_uninstall_plugin' );

	/**
	 * Begins execution of the plugin.
	 *
	 * Since everything within the plugin is registered via hooks,
	 * then kicking off the plugin from this point in the file does
	 * not affect the page life cycle.
	 *
	 * @since   1.0.0
	 * @param		void
	 * @return	Crbn_Blcks
	 */
	function crbn_blcks() {
		global $crbn_blcks;

		// Instantiate only once.
		if ( ! isset( $crbn_blcks ) ) {
			$crbn_blcks = new Crbn_Blcks();
			$crbn_blcks->init();
		}
	}

	crbn_blcks(); // Run the plugin

}
