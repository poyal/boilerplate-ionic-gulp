var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
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
    .pipe(gulp.dest(config.tmp + '/styles'));
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
    .pipe(gulp.dest(config.tmp + '/styles'));
});

gulp.task('sass-watcher', function() {
  gulp.watch([config.sass], ['sass']);
});

gulp.task('inject', function() {
  log('Injecting custom scripts to index.html');
  log(config.js);
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.js), {
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

gulp.task('serve', ['inject', 'sass'], function() {
  startBrowserSync('serve');
});

gulp.task('serve', ['inject', 'sass'], function() {
  startBrowserSync('serve');
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
    case 'dist':
      log('Serving dist app');
      serveDistApp();
      break;
    case 'docs':
      log('Serving docs');
      serveDocs();
      break;
    default:
      log('Serving app');
      serveApp();
      break;
  }

  function serveApp() {
    gulp.watch([config.sass], ['sass']);

    options.server = {
      baseDir: [
        config.client,
        config.tmp
      ]
    };
    options.files = [
      config.client + '/**/*.*',
      '!' + config.sass,
      config.tmp + '/**/*.css'
    ];

    browserSync(options);
  }

  function serveDistApp() {
    options.server = {
      baseDir: [
        config.dist
      ]
    };
    options.files = [];

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