const Bundler = require('parcel-bundler');
const Path = require('path');

// 入口文件路径
const file = Path.join(__dirname, './src/index.js');

const options = {
  outDir: './dist',
  outFile: 'qrcode.js',
  watch: false,
  minify: true
}

const bundler = new Bundler(file, options);

bundler.bundle();
