const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: path.resolve(__dirname, "app"),
	entry: {
		main: "./app.js"
	},
	output: {
		path: path.resolve(__dirname, "dist/js"),
		filename: "app.js",
		publicPath: "/dist/js"
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /node_modules\/JSONStream\/index\.js$/,
				use: ["shebang-loader", "babel-loader"]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	externals: ["ws"]
};
