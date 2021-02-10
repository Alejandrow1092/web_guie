const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint =require('gulp-eslint');

//run Eslint

gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
.pipe(eslint())
.pipe(eslint.format());


gulp.task('default', function(){
//Node source
gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

//Browser source
gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));


});
