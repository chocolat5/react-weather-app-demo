const webpack = require('webpack');
const path = require('path');
const PORT = process.env.PORT || '8080';

const Dotenv = require('dotenv-webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      index: './index.js',
    },
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    devServer: {
      compress: true,
      contentBase: './dist',
      hot: true,
      port: PORT,
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/react',
                ]
              }
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer(
                    {
                      overrideBrowserslist: ['last 4 versions'],
                      grid: 'autoplace'
                    }
                  )
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg|ico)$/i,
          use: [
            {

              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: './index.html'
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new Dotenv({
        path: './src/.env',
        safe: false,
        silent: false
      })
    ]
  }
}