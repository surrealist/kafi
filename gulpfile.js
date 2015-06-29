var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var ugly = require("gulp-uglify");
var htmlmin = require("gulp-minify-html");

gulp.task('default', ['ts', 'html', 'css'], function () {
  //
});

gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(concat('all.js')) 
    .pipe(gulp.dest('dest'));
});

gulp.task('html', function(){
  return gulp.src(['app/index.html']) 
      .pipe(gulp.dest('dest'));
});

gulp.task('css', function(){
  return gulp.src(['app/app.css'])
      .pipe(gulp.dest('dest'));
});