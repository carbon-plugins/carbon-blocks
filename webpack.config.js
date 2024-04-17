const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { resolve } = require( 'path' );

defaultConfig.output = {
	filename: '[name].js',
	path: resolve( process.cwd(), '..', 'plugins/carbon-blocks/dist' ),
},

module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
		]
	}
};
