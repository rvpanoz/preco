/**
 * Base webpack config used across other specific configs
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    externals: [],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.publicPath,
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),

        new webpack.NamedModulesPlugin()
    ]
};