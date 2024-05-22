module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src([ '**/*.php', '!src/**/*.php', '!node_modules/**/*.php', '!build/**/*.php', '!dist/**/*.php' ])
      .pipe( plugins.plumber(errorHandler) )
			.pipe( plugins.sort() )
			.pipe( gulp.dest( config.build ) )
			.pipe(
				plugins.notify({
					message:() => `✅ Wordpress`,
					onLast: true,
					notifier: function (options, callback) {
						callback();
					}
				})
			);
	}
};
