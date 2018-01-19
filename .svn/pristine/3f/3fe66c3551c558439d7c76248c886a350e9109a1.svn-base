"use strict";
let webpack = require('webpack');
let webpackDevServer = require("webpack-dev-server");
let ip = require('ip');
let localIp = ip.address();
let config = require("./webpack.config.js");
let compiler = webpack(config);
let server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: false,
//    quiet: true,
});
server.listen('3000', 'www.lingtouniao.com', function (err, result) {
    err && console.log(err);
    console.log('Listening at22 localhost:3000');
});
