// Gulpfile.js:
//Include required modules
var gulp = require("gulp"),
    babelify = require('babelify'),
    vueify = require('vueify'),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps");

//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task("build", function () {
    return browserify({ entries: ['assets/js/index.js']})
        // .transform(babelify.configure({
        //     presets: ["@babel/env"]
        // }))
        .transform(vuetify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("./build/"));
});


gulp.task('dev', function() {
    return browserify("assets/js/index.js")
    //.transform(babelify, { presets: ['es2015'] })
        .transform(vueify)
        .transform(babelify.configure({
            presets: ["@babel/env"]
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build'))
    //.pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('assets/js/', gulp.series('build'));
});