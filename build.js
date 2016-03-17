var fs = require('fs');
var minify = require('html-minifier').minify;

var config = {
    charset: 'utf8',
    htmlMinify: {
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        quoteCharacter: '"',
    },
    sourceFile: 'index-dev.html',
    targetFile: 'index-prod.html',
};

console.log('Minifying ' + config.sourceFile + ' -> ' + config.targetFile);

fs.readFile(config.sourceFile, config.charset, function (err, src) {
    if (err) throw err;
    
    var minified = minify(src, config.htmlMinify);

    fs.writeFile(config.targetFile, minified, config.charset, function (err) {
        if (err) throw err;
        
        console.log('done');
    });
});
