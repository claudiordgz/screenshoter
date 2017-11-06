const path = require('path');

let configuration = {
  entry: path.join(__dirname, 'src/handler.ts'),
  target: 'node',
  output: {
    filename: 'handler.js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: /node_modules/       
      },
      { 
        test: /\.ts$/, 
        loader: 'ts-loader',
        exclude: /node_modules/       
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
}

module.exports = configuration
