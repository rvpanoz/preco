const webpackMerge = require('webpack-merge');
const base = require('./configs/webpack.config.base');

const envs = {
    development: 'dev',
    production: 'prod',
};

/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./configs/webpack.config.${env}.js`);

module.exports = webpackMerge(base, envConfig);