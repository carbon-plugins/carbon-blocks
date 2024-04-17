module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src( [ config.build, config.dest ], { read: false, allowEmpty: true } )
		.pipe( plugins.clean({ force: true }));
	}
};
