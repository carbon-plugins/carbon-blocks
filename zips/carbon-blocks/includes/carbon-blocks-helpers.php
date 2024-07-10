<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Check and inlcude once a file if it exists
 *
 * @since 1.0.0
 * @param  string $filename
 * @return void
 */
function crbn_blcks_include( $filename = '' ) {
	$file_path = crbn_blcks_get_path($filename);
	if( file_exists($file_path) ) {
		include_once($file_path);
	}
}

/**
 * Trim a path a return the plugin path
 *
 * @since 1.0.0
 * @param  mixed $filename
 * @return string
 */
function crbn_blcks_get_path( $filename = '' ) {
	return CRBN_BLCKS_PATH . ltrim($filename, '/');
}

/**
 * Check if the current page contains the Gutenberg editor
 *
 * @since 1.0.0
 * @param  mixed $filename
 * @return string
 */
function crbn_blcks_is_gutenberg() {
	if( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
		return true;
	}
	$current_screen = get_current_screen();
	if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
		return true;
	}
	return false;
}
