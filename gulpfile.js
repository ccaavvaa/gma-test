/// <binding AfterBuild='build' Clean='clean' />
var gulp = require('gulp');
var exec = require('child_process').exec;
var gulp = require('gulp-help')(gulp);
var path = require('path');
var del = require('del');

require('dotbin');

gulp.task('clean', 'Cleans the generated js files from lib directory', function () {
  return del([
    './build/*.js',
  ]);
});

gulp.task('build', 'Generate', ['clean'], (cb) => {
  return exec('yarn run rollup -c', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    if (err) {
      cb(err);
    } else {
      cb();
    }
  })
})
  /*
  return exec('tsc', function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
      console.log(stderr);
    }
    cb(err);
  });
  */
