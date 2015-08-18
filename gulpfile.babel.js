import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import jshint from 'gulp-jshint';
import notify from 'gulp-notify';
import del from 'del';

const sourceFiles = ['src/*.js', 'src/**/*.js'];

gulp.task('clean', function() {
	return del('build/*', function(err) {
		if (!err) {
			console.log(`[${new Date().toTimeString().split(' ')[0]}] Cleared build directory`);
		} else {
			console.log(err);
		}
	});
});

gulp.task('compile:js', ['clean'], function() {
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
		})
		.on('crash', function() {
			gulp.src('build/index.js', {
					read: false
				})
				.pipe(notify({
					title: 'Server Crashed!',
					message: 'Waiting for changes...'
				}));
		});
});

gulp.task('default', ['serve:dev']);
