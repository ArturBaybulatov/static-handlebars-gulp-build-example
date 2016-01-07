// usage: `gulp build`

'use strict'

var gulp = require('gulp')
var handlebars = require('gulp-compile-handlebars')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var merge = require('merge-stream')
//var gutil = require('gulp-util')

var data = require('./src/templates/data.js')
var helpers = require('./src/templates/helpers.js')

gulp.task('build', function build() {
  var templates = gulp.src(['./src/templates/**/*.html', '!./src/templates/_partials/**'])
    .pipe(handlebars(data, {
      batch: ['./src/templates/_partials'],
      helpers: helpers,
    }))
    
    .pipe(gulp.dest('./dist'))
  
  var styles = gulp.src(['./src/styles/**/*.less', '!./src/styles/_imports/**'])
    .pipe(less({paths: ['./src/styles/_imports']}))
    .pipe(autoprefixer(['> 1%', 'ie 7', 'ie 8', 'ie 9']))
    .pipe(gulp.dest('./dist'))
  
  return merge(templates, styles)
})
