// @ts-check

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  mode,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/assets/'
  },
  devServer: {
    compress: true,
    port: 8080,
    publicPath: '/assets/',
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin()
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic'
                  }
                ]
              ]
            }
          }
        ],
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]
      }
    ]
  }
};
