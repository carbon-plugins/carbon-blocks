const sass = require('gulp-sass')(require('sass'));
const mode = require('gulp-mode')();

module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
		const s 		 = plugins.size({ showTotal: false });
    const styles = gulp.src( 'public/assets/carbon-blocks-public.scss', { allowEmpty: true } )
      .pipe( plugins.plumber(errorHandler) )
			.pipe( mode.development( plugins.sourcemaps.init()) )
			.pipe(
				sass({
					outputStyle: 'compressed',
					errLogToConsole: true
				})
				.on('error', sass.logError)
			)
			.pipe( mode.production( plugins.postcss() ) )
			.pipe( s )
			.pipe( plugins.rename({ suffix: '.min' }) )
			.pipe( gulp.dest( config.build + '/public/assets/' ) )
			.pipe( mode.development( plugins.sourcemaps.write( './maps' )) )
			.pipe(
				plugins.notify({
					message:() => `✅ Public Styles : ${s.prettySize}`,
					onLast: true,
					notifier: function (options, callback) {
						callback();
					}
				})
			)

		return styles;
  };
};
