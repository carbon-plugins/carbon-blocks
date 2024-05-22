module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src( 'dist/**/*' )
		.pipe( plugins.plumber(errorHandler) )
		.pipe( plugins.zip(`carbon-blocks-${config.version}.zip`) )
		.pipe( gulp.dest('zips/') )
		.pipe(
			plugins.notify({
				message:() => `✅ Finished !`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
	}
};
