var gulp = require('gulp');
var sass = require('gulp-sass')
var assets = "./dist/";
var src = "./src/";

gulp.task('sass', function () {
  gulp.src( src + '/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest( assets + '/css'));
});

gulp.task('watch', function() {
  gulp.watch( src + '/scss/**/*.scss', ['sass']);
});
