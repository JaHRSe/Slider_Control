const path = require("path");

module.exports = {
  target: "web",
  mode: "production",
  entry: "./src/Control-Slider.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "control-slider.js",
    library: "ControlSlider",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: [/node_modules/, "/src/app.ts"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json",
            },
          },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
