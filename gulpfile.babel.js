import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import jshint from 'gulp-jshint';

const sourceFiles = ['src/*.js', 'src/**/*.js'];

gulp.task('compile:js', function() {
	return gulp.src(sourceFiles)
		.pipe(babel({
			stage: 0
		}))
		.pipe(jshint())
		.pipe(gulp.dest('./build'));
});

gulp.task('serve:dev', ['compile:js'], function() {
	nodemon({
		script: './build/index.js',
		ext: 'js',
		watch: sourceFiles,
		tasks: ['compile:js']
	});
});

gulp.task('default', ['serve:dev']);
