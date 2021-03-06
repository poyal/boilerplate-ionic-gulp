var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var templateCache = require('gulp-angular-templatecache');
var del = require('del');
var $ = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', function() {
  log('Analyzing source with JSHint and JSCS');

  return gulp
    .src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('clean-tmp', function(done) {
  var files = config.tmp;
  clean(files, done);
});

gulp.task('clean', function(done) {
  var delconfig = [].concat(config.dist, config.tmp);
  log('Cleaning ' + $.util.colors.blue(delconfig));
  del(delconfig, done);
});

gulp.task('clean-all', function(done) {
  var delconfig = config.allToClean;
  log('Cleaning ' + $.util.colors.blue(delconfig));
  clean(delconfig, done);
});

gulp.task('sass', function() {
  log('Compiling Sass --> CSS');

  var sassOptions = {
    outputStyle: 'nested' // nested, expanded, compact, compressed
  };

  return gulp
    .src(config.sass)
    .pipe($.plumber({
      errorHandler: swallowError
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.client + '/css'));
});

gulp.task('sass-min', function() {
  log('Compiling Sass --> minified CSS');

  var sassOptions = {
    outputStyle: 'compressed' // nested, expanded, compact, compressed
  };

  return gulp
    .src(config.sass)
    .pipe($.plumber({
      errorHandler: swallowError
    }))
    .pipe($.sass(sassOptions))
    .pipe($.autoprefixer())
    //.pipe($.rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('sass-watcher', function() {
  gulp.watch([config.sass], ['sass']);
});


gulp.task('inject', ['templates'], function() {
  log('Injecting custom scripts to index.html');
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.js), {
      relative: true
    }))
    .pipe(gulp.dest(config.client));
});

gulp.task('inject-dev', function() {
  log('Injecting custom scripts to index.html except templates.module.js');
  var templateFile = '!' + config.client + '/app/templates.module.js';
  var devjs = [].concat(config.js, [templateFile]);
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(devjs), {
      relative: true
    }))
    .pipe(gulp.dest(config.client));
});

gulp.task('copy', function() {
  log('Copying assets');

  return gulp
    .src(config.assets, {
      base: config.client
    })
    .pipe(gulp.dest(config.dist + '/'));
});


gulp.task('optimize', ['inject', 'sass-min'], function() {
  log('Optimizing the js, css, html');

  return gulp
    .src(config.index)
    .pipe($.plumber({
      errorHandler: swallowError
    }))
    .pipe($.useref())
    .pipe($.if('scripts/app.js', $.uglify()))
    .pipe(gulp.dest(config.dist));
});


gulp.task('templates', function() {
  return gulp.src(config.templates)
    .pipe(templateCache({
      root: 'app/',
      filename: 'templates.module.js',
      module: 'app.templates',
      standalone: true
    }))
    //.pipe($.concat('templates.module.js'))
    .pipe(gulp.dest('client/app/'));
});

gulp.task('serve', ['inject', 'sass'], function() {
  startBrowserSync('serve');
});

gulp.task('dev', ['inject-dev', 'sass'], function() {
  startBrowserSync('dev');
});

gulp.task('build', ['optimize', 'copy'], function() {
  startBrowserSync('dist');
});

gulp.task('serve-dist', function() {
  gulp.run('build');
});

gulp.task('serve-docs', ['jade-docs'], function() {
  startBrowserSync('docs');
});










var includeIonic = true;

gulp.task('css', function() {
  var srcFiles = config.pubSrc;
  if (!includeIonic) srcFiles = [config.publish + "/assets/**/*.scss"];
  gulp.watch(srcFiles, ['publish-sass']);
  startBrowserSync('publish');
});

gulp.task('publish-sass', function() {
  log('Compiling Sass for publish --> CSS');

  var sassOptions = {
    outputStyle: 'nested' // nested, expanded, compact, compressed
  };

  var srcFiles = config.pubSass;
  if (!includeIonic) srcFiles = [config.publish + "/scss/style.scss"];

  return gulp
    .src(srcFiles)
    .pipe($.plumber({
      errorHandler: swallowError
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./html/css'));
});

gulp.task('css-deploy', function() {
  log('Copying css from html to client');

  return gulp
    .src(['/css/*.*'], {
      base: config.html
    })
    .pipe(gulp.dest(config.client + '/css'));
});

/*
gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
*/

function clean(path, done) {
  log('Cleaning: ' + $.util.colors.blue(path));
  del(path, done);
}

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.green(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.green(msg));
  }
}

function swallowError(error) {
  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

function startBrowserSync(opt) {
  if (args.nosync || browserSync.active) {
    return;
  }

  var options = {
    port: 3000,
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: 'gulp-patterns',
    notify: true,
    reloadDelay: 0, //1000,
    online: false
  };

  switch (opt) {
    case 'docs':
      log('Serving docs');
      serveDocs();
      break;
    case 'dev':
      log('Serving app');
      serveApp();
      break;
    case 'publish':
      log('Serving Publish Files');
      servePublishApp();
      break;
    case 'dist':
    default:
      log('Serving dist app');
      serveDistApp();
      break;
  }

  function servePublishApp() {
    options.server = {
      baseDir: [
        config.publish
      ]
    };

    browserSync(options);
  }

  function serveApp() {
    gulp.watch([config.sass], ['sass']);

    options.server = {
      baseDir: [
        config.client
      ]
    };
    options.files = [
      config.client + '/**/*.*',
      '!' + config.sass
    ];

    browserSync(options);
  }

  function serveDistApp() {
    options.server = {
      baseDir: [
        config.dist
      ]
    };
    options.files = [
      config.publish + '/**/*.*',
      '!' + config.publish + '/scss/**/*.*',
      '!' + config.publish + '/ionic/**/*.*',
      '!' + config.publish + '/assets/**/*.*'
    ];

    browserSync(options);
  }

  function serveDocs() {
    gulp.watch([config.docsJade], ['jade-docs']);

    options.server = {
      baseDir: [
        config.docs
      ]
    }

    options.files = [
      config.docs + '/index.html',
      '!' + config.jade
    ];

    browserSync(options);
  }

}
