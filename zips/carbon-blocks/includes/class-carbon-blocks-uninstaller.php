<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Uninstaller' ) ) :

	/**
	 * Fired during plugin delete.
	 *
	 * @since  1.0.0
	 */
	class Crbn_Blcks_Uninstaller {

		/**
		 * Delete all the data on plugin delete
		 *
		 * @since  1.0.0
	 	 * @return void
		 */
		public static function uninstall() {
			if( !get_option( CRBN_BLCKS_NAME . '_options' ) ) return true;
			if( !get_option( CRBN_BLCKS_NAME . '_options' )["deleteAllOnRemove"] ) return true;

			if(get_option( CRBN_BLCKS_NAME . '_options' )){
				delete_option( CRBN_BLCKS_NAME . '_options' );
			}
			if(get_option( CRBN_BLCKS_NAME . '_license' )){
				delete_option( CRBN_BLCKS_NAME . '_license' );
			}
		}

	}

endif;
