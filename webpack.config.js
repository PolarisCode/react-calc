'use strict';
var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry:[
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/main.jsx' // Your app?s entry point
    ],
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'jsx?harmony'],
                include: path.join(__dirname, 'src') }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
};