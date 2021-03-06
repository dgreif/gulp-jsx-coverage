// Mocha test example
require('gulp').task('mocha_tests', require('./index').createTask({
    src: ['test/test1.js', 'test/test2.jsx', 'test/test3.coffee'],
    istanbul: {
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|test[0-9]/
    },
    transpile: {
        babel: {
            include: /\.jsx?$/,
            exclude: /node_modules/
        },
        coffee: {
            include: /\.coffee$/
        }
    },
    coverage: {
        reporters: ['text', 'json', 'lcov'],
        directory: 'coverage'
    },
    mocha: {
        reporter: 'spec'
    },
    babel: {
        sourceMap: 'both'
    },
    coffee: {
        sourceMap: true
    }
}));

// Jasmine test example
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var GJC = require('./index');
var GJCoptions = {
    istanbul: {
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|test[0-9]/
    },
    transpile: {
        babel: {
            include: /\.jsx?$/,
            exclude: /node_modules/
        },
        coffee: {
            include: /\.coffee$/
        }
    },
    coverage: {
        reporters: ['text', 'json', 'lcov'],
        directory: 'coverage'
    },
    babel: {
        sourceMap: 'both'
    },
    coffee: {
        sourceMap: true
    }
};

gulp.task('jasmine_tests', function () {
    GJC.initIstanbulHook(GJCoptions);

    return gulp.src(['test/test4.js', 'test/test5.jsx', 'test/test6.coffee'])
    .pipe(jasmine())
    .on('end', GJC.colloectIstanbulCoverage(GJCoptions));
});
