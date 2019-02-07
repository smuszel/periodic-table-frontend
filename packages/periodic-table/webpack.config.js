const webpack = require('webpack');
const htmlplugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg', '.css']
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)/,
                use: 'babel-loader'
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: 'react-svg-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlplugin({
            template: path.resolve('index.html')
        }),
        new webpack.ProgressPlugin()
    ]
}