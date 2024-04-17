module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src('assets/**/*')
		.pipe( plugins.plumber(errorHandler) )
		.pipe( gulp.dest( config.build + '/assets/' ) )
		.pipe(
			plugins.notify({
				message:() => `✅ Assets`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
	}
};
