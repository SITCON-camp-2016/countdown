var path = require('path');

module.exports = {
    entry: ['./src/scripts/Main.jsx'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file?name=images/[name].[hash].[ext]'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=images/[name].[hash].[ext]&mimetype=image/svg+xml'
            }

        ]
    },
    devServer: {
        outputPath: path.join(__dirname, 'dist')
    },
};