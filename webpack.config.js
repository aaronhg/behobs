var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    entry : APP_PATH,
    output:{
        path : BUILD_PATH,
        filename : 'bundle.js',
    },
    plugins:[
        new HtmlwebpackPlugin({
        title: 'Hello World app'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                exclude: /node_modules/,
                query: {
                    plugins: ["transform-decorators-legacy","transform-export-extensions"],
                    presets: ['react','stage-0','es2015'],
                }
            },
        ]
    }
}