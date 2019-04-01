const webpack = require('webpack')
const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'qrcode.js',
        libraryTarget: 'umd'
    },
    mode: 'production',
    target: "node"
}

module.exports = config