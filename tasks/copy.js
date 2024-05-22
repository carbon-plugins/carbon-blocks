module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src( config.copyPath )
		.pipe( plugins.plumber(errorHandler) )
		.pipe( plugins.sort() )
		.pipe( gulp.dest( config.dest ) )
		.pipe(
			plugins.notify({
				message:() => `✅ Copy Build`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
	}
};
