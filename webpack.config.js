var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

let libraryName = 'main';

var entrypoint = process.env.npm_lifecycle_event === 'dev' ?
  'webpack-dev-server/client?http://localhost:8080' :
  './src/app.js';

let plugins = [], outputFile;

if (process.env.npm_lifecycle_event === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new ExtractTextPlugin("./style.css"))
  outputFile = libraryName + '.min.js';
} else {
  plugins.push(new ExtractTextPlugin("./style.css"))
  outputFile = libraryName + '.js';
}

const config = {
   entry: entrypoint,
  output: {
    path: __dirname + '/dist',
    publicPath: "/dist/",
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
        loaders: [
            { 
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            },
            {
              test: /\.scss$/,
              loaders: ExtractTextPlugin.extract({fallback:"style-loader",use:['css-loader','sass-loader']})
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: plugins
};

module.exports = config;