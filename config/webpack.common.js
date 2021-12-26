import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new MiniCssExtractPlugin()],
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
                ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: '3.12.1' }],
                ['@babel/preset-react', { runtime: 'automatic' }]
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
