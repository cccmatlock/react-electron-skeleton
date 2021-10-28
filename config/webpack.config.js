const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "..", "./src/renderer/index.tsx"),
	output: {
		filename: "rendererBundle.js",
		path: path.resolve(__dirname, "..", "./dist"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "..", "./dist"),
		},
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-typescript",
								[
									"@babel/preset-react",
									{
										runtime: "automatic",
									},
								],
							],
						},
					},
				],
			},

			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "..", "./src/renderer/index.html"),
		}),
		new ProvidePlugin({
			React: "react",
		}),
	],
};
