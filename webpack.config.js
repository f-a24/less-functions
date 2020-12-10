module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
    library: 'less',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/public/`,
    open: true,
    hot: true,
    port: 3000
  }
};