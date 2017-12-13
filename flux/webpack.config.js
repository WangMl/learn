const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const paths = require('./config/paths.js');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: APP_DIR + '/index.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: BUILD_DIR
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Hello React',
        inject: true,
        template: 'assets/app.ejs'
    })
    //new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
   // chunkFilename: "bundle-[chunkhash].js",
    publicPath: '/main/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test : /\.(jsx|js)$/,
                include : APP_DIR,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015', 'react'],
                    }
                  }
            },
            { 
                test: /\.hbs$/, 
                loader: "handlebars" 
            }
        ]
    }   
};