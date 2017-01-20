var path = require('path');
module.exports = {
    context: __dirname,
    entry: './client/app.jsx',
    output: {
        path: path.join(__dirname, './'),
        publicPath: './',
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json','.babel', '.node']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.node$/,
                loader: 'node-loader'
            },
            {
                exclude: /node_modules/,
                test: /.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};