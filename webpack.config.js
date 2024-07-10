const { resolve } = require( 'path' );
const defaults = require('@wordpress/scripts/config/webpack.config.js');


module.exports = (env) => {
	return [
		{
			entry: {
				'react-jsx-runtime': {
					import: 'react/jsx-runtime',
				},
			},
			output: {
				path: resolve( process.cwd(), 'build/admin/assets' ),
				filename: 'react-jsx-runtime.js',
				library: {
					name: 'ReactJSXRuntime',
					type: 'window',
				},
			},
			externals: {
				react: 'React',
			},
		},
		{
			...defaults,
			output: {
				...defaults.output,
				filename: '[name].js',
				path: resolve( process.cwd(), 'build/src' ),
			},
			module: {
				...defaults.module,
				rules: [
					...defaults.module.rules,
					{
						test: /\.(tsx|jsx|ts|js)?$/,
						exclude: /node_modules/,
						use: [
							{
								loader: 'ts-loader',
								options: {
									configFile: 'tsconfig.json',
									transpileOnly: true,
								}
							}
						]
					}
				]
			},
		}
	]
};
