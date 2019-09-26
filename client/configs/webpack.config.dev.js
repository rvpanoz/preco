const webpack = require('webpack');
const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: commonPaths.entryPath,
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            localsConvention: 'camelCase',
                            modules: {
                                localIdentName: '[local]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 5577,
        contentBase: commonPaths.publicPath,
        compress: true,
        hot: true,
        open: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};