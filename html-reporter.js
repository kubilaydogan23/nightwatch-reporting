var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/html-report',
    // available themes: default / cover / compact / default-gray / compact-gray
    themeName: 'cover',
});

module.exports = {
    write: function (results, options, done) {
        reporter.fn(results, done);
    }
};