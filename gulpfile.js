const gulp 					= require('gulp');
const mode 					= require('gulp-mode')();
const plugins 			= require('gulp-load-plugins')();
const pjson 				= require('./package.json');
const isProduction 	= mode.production();
const createBundle  = require("./tasks/bundler");
const config 				 = {
	dest: 		'../plugins/carbon-blocks/',
	version: 	pjson.version,
	build: 		isProduction ? './dist/' 			: './build/',
	copyPath: isProduction ? './dist/**/*' 	: './build/**/*'
}

const errorHandler = r => {
	plugins.notify.onError('\n\n❌  ===> ERROR: <%= error.message %>\n')(r);
};

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins, config, errorHandler);
}

const publicScriptsBundler = () => createBundle({
	entries: 	['./public/assets/carbon-blocks-public.js'],
	output: 	'carbon-blocks-public.js',
	dest: 		config.build + 'public/assets/'
}, plugins);

const adminScriptsBundler = () => createBundle({
	entries: 	['./admin/assets/carbon-blocks-admin.js'],
	output: 	'carbon-blocks-admin.js',
	dest: 		config.build + 'admin/assets/'
}, plugins);

const gutenbergScriptBundler = () => createBundle({
	entries: 	['./admin/assets/carbon-blocks-gutenberg.js'],
	output: 	'carbon-blocks-gutenberg.js',
	dest: 		config.build + 'admin/assets/'
}, plugins);

const sliderBundler = () => createBundle({
	entries: 	['./public/assets/vendor/slider.js'],
	output: 	'slider.js',
	dest: 		config.build + 'public/assets/vendor/'
}, plugins);

gulp.task('admin', 			getTask('admin'));
gulp.task('assets', 		getTask('assets'));
gulp.task('clean', 			getTask('clean'));
gulp.task('copy', 			getTask('copy'));
gulp.task('languages',	getTask('languages'));
gulp.task('php', 				getTask('php'));
gulp.task('public', 		getTask('public'));
gulp.task('readme', 		getTask('readme'));
gulp.task('vendor', 		getTask('vendor'));
gulp.task('zip', 				getTask('zip'));
gulp.task('publicScripts', 		publicScriptsBundler);
gulp.task('adminScripts',  		adminScriptsBundler);
gulp.task('gutenbergScript',	gutenbergScriptBundler);
gulp.task('slider',  			 		sliderBundler);

gulp.task('default', gulp.series('admin', 'public', 'vendor', 'php', 'publicScripts', 'adminScripts', 'gutenbergScript', 'slider', 'copy', 'languages', 'readme', () => {
	gulp.watch(['./build/**/*'], 																														gulp.series('copy'));
	gulp.watch(['./languages/**/*'], 																												gulp.series('languages'));
	gulp.watch(['./admin/**/*.php','./includes/**/*.php', './*.php','!./build/**/*.php'], 	gulp.series('php'));
	gulp.watch(['./admin/assets/**/*.scss'], 																								gulp.series('admin'));
	gulp.watch(['./admin/assets/carbon-blocks-admin.js'], 																	gulp.series('adminScripts'));
	gulp.watch(['./admin/assets/carbon-blocks-gutenberg.js'], 															gulp.series('gutenbergScript'));
	gulp.watch(['./public/assets/**/*.scss'], 																							gulp.series('public'));
	gulp.watch(['./public/assets/**/*.js'], 																								gulp.series('publicScripts'));
	gulp.watch(['./public/assets/vendor/**/*.scss'], 																				gulp.series('vendor'));
	gulp.watch(['./public/assets/vendor/slider.js'], 																				gulp.series('slider'));
	gulp.watch(['./readme.txt'], 																														gulp.series('readme'));
}));

gulp.task( 'build', gulp.series('admin', 'public', 'vendor', 'php', 'publicScripts', 'adminScripts', 'gutenbergScript', 'slider', 'assets', 'languages', 'readme' ))
