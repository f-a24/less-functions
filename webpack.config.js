module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: ['babel-polyfill', `${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'modules': false}]]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [],
  performance: {
    hints: false
  },
  serve: {
    content: 'public/',
    open: true,
    port: 3000
  }
};