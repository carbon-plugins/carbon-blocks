//const watchify    = require('watchify');
const emsify			= require('esmify');
const browserify  = require('browserify');
const babelify  	= require('babelify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const log         = require('gulplog');
//const assign      = require('lodash.assign');
const mode 				= require('gulp-mode')();
const gulp 				= require('gulp');

module.exports = createBundle = (options, plugins) => {
  const opts = {
    entries: options.entries,
		debug: false,
		packageCache: {},
		fullPaths: true,
		cache: {},
		plugin: [
			[ emsify , {} ]
		]
  };

	let b = browserify(opts).transform(babelify.configure({
		presets: ["@babel/preset-env"]
	}));

	const s = plugins.size({ showTotal: false });

  const rebundle = () =>
    b.bundle()
		.on( 'error', log.error.bind(log, 'Browserify Error') )
    .pipe( source( options.output ) )
		.pipe( buffer() )
		.pipe( plugins.babel() )
    .pipe( mode.development( plugins.sourcemaps.init() ))
		.pipe( mode.production( plugins.uglify({
			toplevel: true,
			mangle: {
				toplevel: true,
				reserved: ['$','require','exports'],
			},
			compress: {
				sequences: true,
				dead_code: true,
				conditionals: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: false
			}
		})) )
    .pipe( mode.development( plugins.sourcemaps.write( './maps' ) ))
		.pipe( s )
		.pipe( plugins.rename({ suffix: '.min' }) )
    .pipe( gulp.dest( options.dest ))
		.pipe(
			plugins.notify({
				message:() => `✅ Scripts : ${s.prettySize}`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		)

  return rebundle();
};
