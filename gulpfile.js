var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var ugly = require("gulp-uglify");

gulp.task('default', ["ts"], function () {
});

gulp.task("ts", function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(concat('all.js'))
    .pipe(ugly())
    .pipe(gulp.dest('dest'));
});