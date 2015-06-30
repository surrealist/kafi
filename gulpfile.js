var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var ugly = require("gulp-uglify");
var htmlmin = require("gulp-minify-html");

gulp.task('default', ['jslib', 'ts', 'html', 'css', 'fonts'], function () {
  //
});

gulp.task('jslib', function () {
  var src = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/angular/angular.js',
    'bower_components/chance/chance.js'
  ];

  return gulp.src(src)
    .pipe(concat('lib.js'))
    .pipe(ugly())
    .pipe(gulp.dest('dest'));
});

gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('html', function () {
  return gulp.src(['app/index.html'])
    .pipe(gulp.dest('dest'));
});

gulp.task('css', function () {
  return gulp.src([
    'bower_components/fontawesome/css/font-awesome.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'app/app.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dest'));
});

gulp.task('fonts', function(){ 
  var src = [ 'bower_components/fontawesome/fonts/*.*',
    'node_modules/bootstrap/dist/fonts/*.*'];
    
  return gulp.src(src).pipe(gulp.dest('dest/fonts'));
});