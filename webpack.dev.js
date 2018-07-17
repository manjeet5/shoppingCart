const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	mode:"development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
				],
			},
		]
	},
	devServer: {
		inline: true,
		contentBase: './js',
		port: '3000',
		historyApiFallback: true,
		proxy: {
      "/admin": {
				target:'http://localhost:8080/admin',
				secure:false,
				// rewrite: function (req){
				// 	console.log('PROXY section is being triggered')
				// }
			}
    }
	},

});
