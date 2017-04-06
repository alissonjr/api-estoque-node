var gulpDocumentation = require('gulp-documentation');
var gulp = require('gulp');

gulp.task('documentation-html', function () {
  return gulp.src('./*.js')
    .pipe(gulpDocumentation('html', {}, {
      name: 'API CEP Node.js',
      version: '1.0.0'
    })).pipe(gulp.dest('docs'));
});

gulp.task('default', ['documentation-html']);
