const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require("css-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./js/companiesBlock.js",
    technologySlider: "./js/technologiesBlock.js",
    priceSlider: "./js/pricesSlider.js",
    formFeedBack: "./js/openFormFeedback.js",
    css: "./js/style.js"
  },
  output: {
    filename: "./js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new CssMinimizerPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "img", // Исходная папка (внутри src)
          to: "img", // Папка назначения (внутри dist)
        },
        {
          from: "icons", // Исходная папка (внутри src)
          to: "icons", // Папка назначения (внутри dist)
        },
        {
          from: "fonts", // Исходная папка (внутри src)
          to: "fonts", // Папка назначения (внутри dist)
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Извлекаем CSS в отдельный файл
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
        
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'images/[name][ext]',
        // },
      },
    ]
  }
  
};
