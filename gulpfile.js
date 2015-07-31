var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var ugly = require("gulp-uglify");
var htmlmin = require("gulp-minify-html");

var destinationFolder = 'calculator';

gulp.task('default', ['jslib', 'jspm',  'ts', 'html', 'css', 'fonts'], function () {
  //
});

gulp.task('jslib', function () {
  var src = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/angular/angular.js' 
  ];

  return gulp.src(src)
    .pipe(concat('lib.js'))
    .pipe(ugly())
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    // .pipe(concat('all.js'))
    // .pipe(ugly())
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('html', function () {
  var src = [
    'app/index.html'
  ];

  return gulp.src(src)
    //    .pipe(htmlmin())
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('css', function () {
  var src = [
    'bower_components/fontawesome/css/font-awesome.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'app/app.css'
  ];

  return gulp.src(src)
    .pipe(concat('all.css'))
    .pipe(gulp.dest(destinationFolder));
});

gulp.task('fonts', function () {
  var src = [
    'bower_components/fontawesome/fonts/*.*',
    'node_modules/bootstrap/dist/fonts/*.*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest(destinationFolder + '/fonts'));
});

gulp.task('jspm', function () {
  var src = [
    'jspm_packages/**/*.*'
  ];

  return gulp.src(src)
    .pipe(gulp.dest(destinationFolder + '/jspm_packages'));
});