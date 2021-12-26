import { join, dirname } from 'path';
import commonConfig from './webpack.common.js';
import { merge } from 'webpack-merge';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const prodConfig = {
  mode: 'production',
  output: {
    path: join(__dirname, '..', 'dist', 'public'),
  },
  plugins: [new CleanWebpackPlugin()]
};

export default merge(commonConfig, prodConfig);
