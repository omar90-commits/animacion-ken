const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/app.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{ 
				test: /\.scss$/, 
				use: [ { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' } ]
			},
			{ 
				test: /\.css$/i, 
				use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ], 
			},
			{
				test: /\.(png|jpg)$/i, 
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/imagenes',
					outputPath: 'imagenes'
				}
			}
		]
	},
	devServer: {
		port: 9000,
		open: true,
		contentBase: path.resolve(__dirname, 'dist')
	}
}