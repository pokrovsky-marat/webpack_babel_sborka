module.exports = {
  mode: "development",
  module: {
    rules: [
      //For js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
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
};
