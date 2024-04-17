// wp.hooks.addFilter( 'blocks.registerBlockType', 'custom-styles/carbon-blocks', ( settings, name ) => {

// 	const stylize = (styles) => lodash.assign( {}, settings, { attributes: lodash.assign( {}, settings.attributes, styles ) } );

// 	switch (name) {
// 		case 'carbon-blocks/tabs':
// 			return stylize()
// 		default:
// 			break;
// 	}

// 	return settings;
// });
