import { __ } from '@wordpress/i18n';
import { assign } from 'lodash';

const attributes = ( settings, name ) => {
	if( ( name.startsWith( 'core/') || name.startsWith( 'carbon-blocks/') ) && settings?.attributes?.animation === undefined ){
		settings.attributes = assign( {}, settings.attributes, {
			animation: {
				type: 'object',
				default: {
					isActive: false,
					type: "fade",
					duration: 500,
					delay: 0,
					repeat: false,
					easing: "ease"
				}
			}
		} )
	}

	if( ( name.startsWith( 'core/') || name.startsWith( 'carbon-blocks/') ) && settings?.attributes?.showActions === undefined ){
		settings.attributes = assign( {}, settings.attributes, {
			showActions: {
				type: 'boolean',
				default: true
			}
		} )
	}

	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'carbon-plugins/attributes',
	attributes
);
