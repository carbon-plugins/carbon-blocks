module.exports = function (gulp, plugins, config, errorHandler) {
	return function () {
		return gulp.src( 'languages/*.{mo,po,pot,json}' )
		.pipe( plugins.plumber(errorHandler) )
		.pipe( plugins.sort())
		.pipe( gulp.dest( config.build + "/languages/" ) )
		.pipe(
			plugins.notify({
				message:() => `✅ Languages`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
	}
};
