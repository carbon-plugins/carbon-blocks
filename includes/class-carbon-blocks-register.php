<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Crbn_Blcks_Register' ) ) :

	class Crbn_Blcks_Register {
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
		 * Check if blocks are already registered, and load them if not
		 *
	 	 * @since  1.0.0
		 * @return void
		 */
		public function load_blocks() {

			$block_list = array(
				'accordion',
				'accordion-item',
				'advanced-buttons',
				'advanced-button',
				'advanced-image',
				'badge',
				'badges',
				'card',
				'cards',
				'counter',
				'counters',
				'divider', //?
				'feature',
				'features',
				'icons',
				'image-slide',
				'image-slider',
				'logo-slide', //?
				'logo-slider', //?
				'masonry',
				'message',
				'slide',
				'tab',
				'tabs',
				'task', //?
				'tasks', //?
				'testimonial',
				'testimonial-grid',
				'testimonial-slider' //?
			);


			foreach ($block_list as $block_name) {
				register_block_type( CRBN_BLCKS_PATH . 'src/blocks/'. $block_name );
			}

		}

		/**
		 * Check if plugins are already registered, and load them if not
		 *
	 	 * @since  1.0.0
		 * @return void
		 */
		public function load_plugins() {

			$index_js     = 'src/plugins/attributes/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/attributes/index.asset.php' );
			wp_enqueue_script( 'carbon-plugins-attributes', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

			$index_js     = 'src/plugins/auto-recovery/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/auto-recovery/index.asset.php' );
			wp_enqueue_script( 'carbon-plugins-auto-recovery', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

			$index_js     = 'src/plugins/action-buttons/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/action-buttons/index.asset.php' );
			wp_enqueue_script( 'carbon-plugins-action-buttons', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

			$index_js     = 'src/plugins/datasets/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/datasets/index.asset.php' );
			wp_enqueue_script( 'carbon-plugins-datasets', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

			$index_js     = 'src/plugins/animation/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/animation/index.asset.php' );
			wp_enqueue_script( 'carbon-plugins-animation', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

		}

		public function define_blocks_categorie( $categories ) {
			$menuAlreadyExists = array_search("carbon-blocks", array_column($categories, 'slug'));
			if(is_bool($menuAlreadyExists) && !!$menuAlreadyExists) return $categories;

			return array_merge(
				[
					[
						'slug'  => 'carbon-blocks',
						'title' => __( 'Carbon Blocks', 'carbon-blocks' ),
					]
				],
				$categories
			);

		}

		public function add_data_animation( $block_content, $block ) {
			if ( str_starts_with($block['blockName'], 'core/') || str_starts_with($block['blockName'], 'carbon-blocks/') ) {
				if($block["attrs"]["animation"] && $block["attrs"]["animation"]["isActive"]) {
					$anim 			= $block["attrs"]["animation"]["type"];
					$duration 	= $block["attrs"]["animation"]["duration"];
					$delay 			= $block["attrs"]["animation"]["delay"];
					$easing 		= $block["attrs"]["animation"]["easing"];
					$repeat 		= $block["attrs"]["animation"]["repeat"] ? "data-anim-repeat" : "";
					$tag = explode(' ', $block_content, 2);
					$edited_block_content =
						$tag[0].'
						data-anim="'.$anim.'"
						data-anim-duration="'.$duration.'"
						data-anim-delay="'.$delay.'"
						data-anim-easing="'.$easing.'"
						'.$repeat.'
						'.$tag[1];
					return $edited_block_content;
				}
				return $block_content;
			}
			return $block_content;
		}

	}

endif;


