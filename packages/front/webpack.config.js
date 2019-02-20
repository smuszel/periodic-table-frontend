const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const client = (env, argv) => ({
    output: { filename: 'bundle.js' },
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
    target: 'web',
    plugins: [
        argv.mode !== 'production' && new HtmlPlugin(),
        new webpack.ProgressPlugin()
    ].filter(x => !!x)
})

const server = {
    entry: './src/server.js',
    output: { filename: 'main.js' },
    target: 'node',
    node: { __dirname: false }
}

module.exports = [client, server];