const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const shell = require('gulp-shell');

gulp.task('css', () => {
  return gulp.src('src/style/**/[^_]*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('_site/style/'));
});

gulp.task('scripts', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('_site/scripts/'))
})

gulp.task('images', () => {
  return gulp.src('src/images/**/*.{png,jpg,jpeg,svg}')
          .pipe(gulp.dest('_site/images/'));
});

gulp.task('redirects', () => {
  return gulp.src('src/_redirects', { allowEmpty: true })
          .pipe(gulp.dest('_site'));
});

gulp.task('generate', shell.task('eleventy'));

gulp.task('generate-dev', shell.task('eleventy', { ignoreErrors: true }));

gulp.task('assets', gulp.parallel('css', 'scripts', 'images'));

gulp.task('build', gulp.series('generate', 'assets', 'redirects'));

gulp.task('watch', () => {
  gulp.watch('.eleventy.js', gulp.series('generate-dev'));
  gulp.watch('src/view/**/*', gulp.series('generate-dev'));
  gulp.watch('src/style/**/*.scss', gulp.series('css'));
  gulp.watch('src/scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('src/images/**/*.{png,jpg,jpeg,svg}', gulp.series('images'));
});

