import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/assets/'
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8080,
    publicPath: '/assets/',
    historyApiFallback: true
  }
};

export default merge(commonConfig, devConfig);
