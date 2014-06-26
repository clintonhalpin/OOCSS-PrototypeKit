var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass', function () {
      gulp.src('app/scss/*.scss')
              .pipe(sass({ outputStyle: 'compressed' }))
              .pipe(gulp.dest('app/css'));
});
