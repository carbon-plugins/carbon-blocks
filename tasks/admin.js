const sass = require('gulp-sass')(require('sass'));
const mode = require('gulp-mode')();

module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
		const s 		 = plugins.size({ showTotal: false });
		const styles = gulp.src([ 'admin/assets/scss/carbon-blocks-gutenberg.scss', 'admin/assets/scss/carbon-blocks-dashboard.scss', 'admin/assets/scss/carbon-blocks-admin.scss'], { allowEmpty: true })
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
			.pipe( mode.development( plugins.sourcemaps.write( './maps' )) )
			.pipe( s )
			.pipe( plugins.rename({ suffix: '.min' }) )
			.pipe( gulp.dest( config.build + '/admin/assets/css' ) )
			.pipe(
				plugins.notify({
					message:() => `✅ Admin Styles : ${s.prettySize}`,
					onLast: true,
					notifier: function (options, callback) {
						callback();
					}
				})
		 	)

		return styles;
  };
};
