const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const { mode = "development" } = env;
  getStyleLoader = () =>
    mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader;

  return {
    mode: mode,
    module: {
      rules: [
        {
          //For js files
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        //For css files
        {
          test: /\.css$/,
          use: [getStyleLoader(), "css-loader"],
        },
        //For SCSS and SASS
        {
          // Регулярное выражение которое позволяет выбрать как .scss, так и .sass
          test: /\.s[ca]ss$/,
          use: [getStyleLoader(), "css-loader", "sass-loader"],
        },
        //For images
        {
          test: /\.(png|gif|jpg|jpeg|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]",
              },
            },
          ],
        },
        //For fonts
        {
          test: /\.(woff|woff2|ttf|eot|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        title: "Name from webpack plugin",
        buildTime: new Date().toISOString(),
      }),
      new MiniCssExtractPlugin(),
    ],
    devServer: {
      open: true,
    },
  };
};
