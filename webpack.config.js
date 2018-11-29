const path = require("path");

module.exports = {
  target: "node",
  // 起点となるファイル
  entry: "./src/index.tsx",
  cache: true,
  mode: "development", // "production" | "development" | "none"
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  // ファイルタイプ毎の処理を記述する
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          configFile: "./tslint.json",
          typeCheck: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
