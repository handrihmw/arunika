// const HtmlWebpackPlugin = require("html-webpack-plugin")
// const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: "production",
  entry: ["./src/resources/scss/app.scss", "./src/resources/js/app.js"],
  output: {
    filename: "js/main.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader?-url",
            "sass-loader",
        ]
      },
      {
        test: /\.(ttf|eot|svg|gif|webp|png|jpg|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
        }]
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        parallel: 4,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html",
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: './src/views/*', to: './views' }
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
      chunkFilename: "css/main.[id].css"
    })
  ],
};
