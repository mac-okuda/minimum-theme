var gulp = require('gulp');
var rename = require('gulp-rename');
var hb = require('gulp-hb'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browser = require('browser-sync').create(),
    minify = require('gulp-clean-css'),
    del = require('del'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    runSequence = require('run-sequence');

var st_dest = "dest/",
    st_root = "/gt/",
    st_src = "src/";

gulp.task('html', function() {
  //各ページとなるファイルの場所を指定する
  return gulp.src( st_src + 'pages/**/*.hbs')
    .pipe(hb({
      data: st_src + 'data/**/*.{js,json}',
      helpers: [
        //継承を可能にするヘルパーを指定する
        './node_modules/handlebars-layouts/dist/handlebars-layouts.js'
      ],
      //インクルードや継承するための雛形の設置場所を指定する
      partials: st_src + 'partials/**/*.hbs',
      bustCache: true
    }))

    // .pipe(yaml({ space: 2 }))
    //拡張子をhbsからhtmlに変更する
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    //出力先を選択する
    .pipe(gulp.dest( st_dest ));
});

// SASS -> CSSビルド -> CSS prefix & minify
gulp.task('css', function(){
  return gulp.src([ st_src + 'assets/style.scss'])
    .pipe(plumber())
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(postcss([
      autoprefixer({
      // ☆IEは11以上、Androidは4.4以上
      // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        //browsers: ["last 2 versions", "ie >= 11", "Android >= 4.4"],
        //cascade: false
        })
     ]))
    .pipe(gulp.dest( st_src + 'assets/css'))
    .pipe(minify())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest( st_src + 'assets/css'))
    // .pipe(gulp.dest( './dest/assets/css'));
});

gulp.task('csscopy', function() {
    return gulp.src( st_src + 'assets/css/**')
               .pipe(gulp.dest( st_dest + 'assets/css'));
 });

 gulp.task('images', function() {
     return gulp.src( st_src + 'assets/images/**')
                .pipe(gulp.dest( st_dest + 'assets/images'));
  });

 gulp.task('js', function() {
     return gulp.src( st_src + 'assets/js/**')
                .pipe(gulp.dest( st_dest + 'assets/js'));
  });



gulp.task('server', function() {
  browser.init({
    port: 5000,
    server: {
      baseDir: st_dest
    }
  });
});
gulp.task('browser-reload', function () {
  browser.reload();
});

gulp.task('default', gulp.series(gulp.parallel('html', 'css', 'csscopy','images', 'js','server')));
gulp.task('sass', gulp.series(gulp.parallel('css','csscopy','images','js' )));