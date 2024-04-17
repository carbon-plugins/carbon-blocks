module.exports = function (gulp, plugins, config, errorHandler) {
  return function () {
    return gulp.src( 'dist/**/*' )
		.pipe( plugins.plumber(errorHandler) )
		.pipe( plugins.zip(`carbon-blocks-${version}.zip`) )
		.pipe( gulp.dest('zips/') )
	}
};
