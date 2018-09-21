const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      	main: ["./src/main.js"]
    },
    mode: "development",
    output: {
      	filename: "[name]-bundle.js",
     	path: path.resolve(__dirname, "./dist"),
      	publicPath: "/"
    },
    devServer: {
		  contentBase: "./dist",
		  overlay: true,
		stats: {
		colors: true
		}
	},
	devtool: "source-map",
    module: {
      	rules: [
			// {
			//   test: /\.js$/,
			//   exclude: /node_modules/,
			//   use: [
			//     {
			//       loader: "babel-loader"
			//     }
			//   ]
			// },
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
                    { loader: "css-loader",
						options: {importLoaders: 1,} 
					},
                    { loader: "postcss-loader"},
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: 'img/',
    						outputPath: 'img/'
						}
				  	}
				]
			}
    	]
    },
    plugins: [
        new HTMLWebpackPlugin({
        	template: 'src/index.html'
        })
    ]
}