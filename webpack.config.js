const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './form'),
        publicPath: '/form'
    },
    devServer: {
        overlay: true
    },
    module: {
          rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
              loader: 'css-loader',
                      options: {sourceMap: true}
                  },
                  {
                loader: 'sass-loader',
                options: {sourceMap: true}
            },
            ]
              },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  MiniCssExtractPlugin.loader,
                  'css-loader'
                ]
            },
          ]
        },
        plugins: [
          new HtmlWebpackPlugin(
            {
              hash: false,
              template: './src/index.html',
              filename: 'index.html',
            }
          ),
          new VueLoaderPlugin(),
          new MiniCssExtractPlugin({
              filename: "[name].css"
          })
        ]
      }