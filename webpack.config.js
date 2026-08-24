import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Recreate __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./"), // Outputs directly to current folder root
    publicPath: "./", // Ensures relative paths work on GitHub Pages
    clean: false, // Kept false to protect source files
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html", // Generates index.html at root
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
