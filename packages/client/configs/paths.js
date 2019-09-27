const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    outputPath: path.resolve(__dirname, '../', 'build'),
    entryPath: path.resolve(__dirname, '../', 'src/index.js'),
    publicPath: path.resolve(__dirname, '../', 'public/index.html'),
    assets: 'assets',
    fonts: 'fonts',
    styles: 'styles',
    components: 'components',
};