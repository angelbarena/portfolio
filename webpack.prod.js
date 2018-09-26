const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: {
      	main: ["./src/main.js"]
    },
    mode: "production",
    output: {
      	filename: "[name]-bundle.js",
		 path: path.resolve(__dirname, "dist")
	},
    module: {
      	rules: [
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  use: [
			    {
			      loader: "babel-loader"
			    }
			  ]
            },
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			// {
			// 	test: /\.(png|jpg|gif)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].[ext]',
			// 				publicPath: 'img/',
    		// 				outputPath: 'img/'
			// 			}
			// 	  	}
			// 	]
			// },
			// {
			// 	test: /\.svg$/, // your icons directory
			// 	loader: 'svg-sprite-loader',
			// 	options: {
			// 		extract: true,
			// 		spriteFilename: './icons/icons.svg', // this is the destination of your sprite sheet
			// 	}
			// }
    	]
    },
    plugins: [
		//new OptimizeCSSAssetsPlugin(),
		new MiniCSSExtractPlugin(/*{
			filename: "[name]-[contenthash].css"
		}*/),
        new HTMLWebpackPlugin({
        	template: './src/index.html'
		})/*,
		new SpriteLoaderPlugin({
			plainSprite: true
		})*/
    ]
}