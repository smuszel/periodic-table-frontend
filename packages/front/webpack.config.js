const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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
    devtool: 'source-map',
    plugins: [
        new HtmlPlugin({
            template: path.resolve('index.html')
        }),
        new webpack.DefinePlugin({
            '__webpack_provide.apiUrl': JSON.stringify(process.env.API_URL)
        }),
        new webpack.ProgressPlugin()
    ]
}