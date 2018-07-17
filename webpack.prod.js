const webpack = require('webpack');
const merge = require('webpack-merge');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
/*
use: ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader']
})
*/
module.exports = merge(common, {
	devtool: 'source-map',
	mode:"production",
	module: {
		rules: [
			{
				test:/\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
				],
			}
		]
	},
	plugins: [
		new webpackUglifyJsPlugin({
			cacheFolder:`${__dirname}/build/public/cached_uglify/`,
			debug: true,
			minimize: true,
			sourceMap: false,
			output: {
				comments: false
			},
			compressor: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})

	]
});
/*
// Minify CSS
new webpack.LoaderOptionsPlugin({
	minimize: true,
}),*/
