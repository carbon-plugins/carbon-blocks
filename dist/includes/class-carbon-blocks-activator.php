<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Activator' ) ) :

	class Crbn_Blcks_Activator {

		/**
		 * Triggers all functions during the plugin activation
		 *
		 * @since   1.0.0
		 * @return	void
		 */
		public static function activate() {

			$plugins_to_check = ['carbon-blocks/carbon-blocks.php', 'carbon-icons/carbon-icons.php', 'carbon-icons-pro/carbon-icons-pro.php'];

			if ( is_multisite() && is_network_admin() ) {
				$active_plugins = (array) get_site_option( 'active_sitewide_plugins', array() );
				$active_plugins = array_keys( $active_plugins );
			} else {
				$active_plugins = (array) get_option( 'active_plugins', array() );
			}

			foreach ( $active_plugins as $plugin_basename ) {
				if ( in_array($plugin_basename, $plugins_to_check) ) {
					set_transient( 'crbn_blcks_activation_error', true, 1 * HOUR_IN_SECONDS );
					$key = array_search($plugin_basename, $plugins_to_check);
					deactivate_plugins( $plugins_to_check[$key] );
					return;
				}
			}

		}

		/**
		 * Shows an error notice if the free version is detected
		 *
		 * @since   1.0.0
		 * @return 	void
		 */
		public static function display_activation_error_message() {

			if ( !get_transient( 'crbn_blcks_activation_error' ) ) return;

			$message = __( "Some Carbon Plugins can't be activated at the same time that Carbon Blocks. They have been deactivated.", 'carbon-blocks' );
			?>
				<div class="error notice is-dismissible">
					<p><?php echo esc_html( $message ); ?></p>
				</div>
			<?php

			delete_transient( 'crbn_blcks_activation_error' );

		}

	}

endif;
