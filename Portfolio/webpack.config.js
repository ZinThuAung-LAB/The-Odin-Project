// Portfolio/webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      // Output directly into the Portfolio/ folder instead of Portfolio/dist/
      path: path.resolve(__dirname),
      filename: "js/[name].js",
      assetModuleFilename: "assets/[name][ext]",
      publicPath: "./", // Uses relative paths for GitHub subfolder hosting
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp|JPG)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // Your template source in src/
        filename: "index.html", // Generates index.html in Portfolio/ root
        inject: "body",
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: "css/[name].css",
            }),
          ]
        : []),
    ],
  };
};
