/**
 * Created by Администратор on 15.07.2016.
 */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BowerWebpackPlugin = require("bower-webpack-plugin"),
    SpritesmithPlugin = require('webpack-spritesmith'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = './server/public'

module.exports = {
    entry: {
        app: './src/index',
        vendors: ['jquery', 'bootstrap-css'],
        //"dev-server": 'webpack-dev-server/client?http://localhost:8080'
        //"dev-server": './node_modules/webpack-dev-server/client?http://localhost:8080'
    },
    output: {
        publicPath: '/',
        path: publicPath,
        filename: '[name].js'
    },

    externals: {
        //"jquery": "jQuery"
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less"
            },
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.html$/, loader: "html"
            },
            //{test: /\.css$/, loader: "style?name=css/[name].[ext]'!css"},
            {test: /\.(woff2?|svg)$/, loader: 'url?limit=10000&name=fonts/[name].[ext]'},
            {test: /\.(ttf|eot)$/, loader: 'file?name=fonts/[name].[ext]'},
            {test: /bootstrap-css.js/, loader: 'imports?jQuery=jquery'},
            {test: /\.(png|jpg)$/, loader: "file?name=../src/images/[name].[ext]"},
            //{test: /\.jade$/, loader: ExtractTextPlugin.extract("html!jade-html")},
            {test: /\.jade$/, loader: "jade"}

        ],
    },

    plugins: [
        new webpack.OldWatchingPlugin(),
        new CleanWebpackPlugin(publicPath),
        new BowerWebpackPlugin({
            modulesDirectories: ["bower_components"],
            manifestFiles: ".bower.json",
            includes: /.*/,
            excludes: [],
            searchResolveModulesDirectories: true
        }),


        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     //filename: "index.js",
        //     minChunks: Infinity,
        // }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css", {disable: true}),


    ],

    devServer: {
        //!!!!!  использовать webpack-dev-server: 1.12
        inline: true,
        //hot: true,
        compress: true,
        contentBase: publicPath,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000/',
                secure: false
            }
        },
        setup: function(app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            app.get('/json', function(req, res) {
                res.json({status: 'OK', message:'test json data'});
            });

        },
        quiet: false,
        noInfo: false,
        //lazy: true,
        historyApiFallback: true

    },
    debug: true,
    devtool: 'eval-source-map',


};


