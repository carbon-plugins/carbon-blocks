import { __ } from '@wordpress/i18n';

const attributes = ( settings, name ) => {
	if( ( name.startsWith( 'core/') || name.startsWith( 'carbon-blocks/') ) && settings?.attributes?.animation === undefined ){
		settings.attributes = lodash.assign( {}, settings.attributes, {
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
		settings.attributes = lodash.assign( {}, settings.attributes, {
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
