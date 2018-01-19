"use strict";
let path = require('path');
let fs = require('fs');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');
let ip = require('ip');
let localIp = ip.address();
let autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');//动态生成html
var CopyWebpackPlugin = require('copy-webpack-plugin');//复制文件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');//打开浏览器
//入口程序,解析app.js
let getEntries = (function () {
    let _entries = {};
    let _basePath = path.join(__dirname, './src/app/');
    let _entryFile = 'app.js';
    let _dirs = fs.readdirSync(_basePath);
    _dirs.forEach(function (dir) {
        let _path = path.join(_basePath, dir, _entryFile);
        if (fs.existsSync(_path)) {
            _entries[dir] = ['webpack/hot/dev-server', 'webpack-dev-server/client?http://'+process.env.npm_package_config_ip+':'+process.env.npm_package_config_port, _path];
        }
    });
    return _entries;
})();

module.exports = {
    /*
    * babel参数
    * */
    babelQuery: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime', 'add-module-exports', 'typecheck', "transform-decorators-legacy"],
        cacheDirectory: true
    },
    devtool: "eval-source-map",
    entry: getEntries,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: '[name]/[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
                exclude: /node_modules/,
                query: this.babelQuery
            },
            {
                test: /\.scss\?l$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[path][name]_[local]_[hash:base64:5]&sourceMap!postcss?sourceMap!sass?sourceMap')
            }, {
                test: /\.(png|jpg)$/,
                loader: "url?name=[path][name].[ext]&limit=8192"
            }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    resolve: {
        extensions: ['', '.js', '.scss','css','png','jpg','jpeg'],
        alias: { //模块别名定义，方便后续直接引用别名，无须多写长长的地址
            /**
             * 公共 banner 组件
             */
            'banner': path.join(__dirname, './src/app/common/components/banner/index.js'),
            /**
             * 公共 alert 组件
             */
            'alert': path.join(__dirname, './src/app/common/components/alert/index.js'),
            /**
             * 公共 登录超时 组件
             */
            'loginOver': path.join(__dirname, './src/app/common/components/loginOver/index.js'),
            /**
             * 公共 input 组件
             */
            'input': path.join(__dirname, './src/app/common/components/input/index.js'),
            /**
             * 公共 inputGroup 组件
             */
            'inputGroup': path.join(__dirname, './src/app/common/components/inputGroup/index.js'),
            /**
             * 公共 imgCode 组件
             */
            'imgCode': path.join(__dirname, './src/app/common/components/imgCode/index.js'),
            /**
             * 公共 phoneCode 组件
             */
            'phoneCode': path.join(__dirname, './src/app/common/components/phoneCode/index.js'),
            /**
             * 公共 Loading 组件
             */
            'loading': path.join(__dirname, './src/app/common/components/loading/index.js'),
            /**
             * 公共 TextArea 组件
             */
            'textarea': path.join(__dirname, './src/app/common/components/textarea/index.js'),
            /**
             * 公共 checkbox 组件
             */
            'checkbox': path.join(__dirname, './src/app/common/components/checkbox/index.js'),

            /**
             * 公共 icon 组件
             */
            'icon': path.join(__dirname, './src/app/common/components/icon/index.js'),

            /**
             * 公共 button 组件
             */
            'button': path.join(__dirname, './src/app/common/components/button/index.js'),
            /**
             * 公共 logo 组件
             */
            'logo': path.join(__dirname, './src/app/common/components/logo/index.js'),
            /**
             * 公共 select 组件
             */
            'select': path.join(__dirname, './src/app/common/components/select/index.js'),
            /**
             * 公共 footer 组件
             */
            'footer': path.join(__dirname, './src/app/common/components/footer/index.js'),
            /**
             * 公共 footer 组件
             */
            'footerNew': path.join(__dirname, './src/app/common/components/footer_new/index.js'),
            /**
             * 公共 head 组件
             */
            'head': path.join(__dirname, './src/app/common/components/head/index.js'),
            /**
             * 公共 lazyLoad 组件
             */
            'lazyLoad': path.join(__dirname, './src/app/common/components/lazyLoad/index.js'),
            /**
             * 公共 scrollLoad 组件
             */
            'scrollLoad': path.join(__dirname, './src/app/common/components/scrollLoad/index.js'),
            /**
             * 公共 switch 组件
             */
            'switch': path.join(__dirname, './src/app/common/components/switch/index.js'),
            /**
             * 公共 noInfo 组件
             */
            'noInfo': path.join(__dirname, './src/app/common/components/noInfo/index.js'),
            /**
             * 公共 public.js
             */
            'publicJs': path.join(__dirname, './src/utils/js/public.js'),


            /**
             * 公共 fetch.js
             */
            'fetchJs': path.join(__dirname, './node_modules/es6-promise/dist/es6-promise.min.js'),

            /**
             * 公共 public.scss
             */
            'publicCss': path.join(__dirname, './src/utils/scss/public.scss')
            }
    },
    plugins: [
        new OpenBrowserPlugin({
          url: 'http://localhost:8181'
        }),
        //热加载
        new webpack.HotModuleReplacementPlugin(),
        /**
         * 调用dll的内容
         * @type {[type]}
         */
        new webpack.DllReferencePlugin({
            context: __dirname,
            //这里引入manifest文件
            manifest: require('./dist/vendor-manifest.json')
        }),
        /**
         * 提取公共部分js
         * @type {String}
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        }),
        new ExtractTextPlugin("[name]/[name].bundle.css")

    ]
}
