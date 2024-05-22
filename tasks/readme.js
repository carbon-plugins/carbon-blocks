module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src('readme.txt')
		.pipe( plugins.plumber(errorHandler) )
		.pipe( gulp.dest( config.build ) )
		.pipe(
			plugins.notify({
				message:() => `✅ Readme`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
	}
};
