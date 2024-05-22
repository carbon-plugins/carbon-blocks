const sass = require('gulp-sass')(require('sass'));
const mode = require('gulp-mode')();

module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
		const s = plugins.size({showTotal: false});
    return gulp.src(['public/assets/vendor/slider.scss'], {allowEmpty: true})
		.pipe( plugins.plumber(errorHandler) )
		.pipe(
			sass({
				outputStyle: 'compressed',
				errLogToConsole: true
			})
			.on('error', sass.logError)
		)
		.pipe( mode.production( plugins.postcss() ))
		.pipe( s )
		.pipe( plugins.rename({ suffix: '.min' }) )
		.pipe( gulp.dest( config.build + '/public/assets/vendor/' ) )
		.pipe(
			plugins.notify({
				message:() => `✅ Vendor : ${s.prettySize}`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		)
	}
};
