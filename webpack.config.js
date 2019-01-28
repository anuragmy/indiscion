const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
	entry: [ './src/app.js' ],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				use: 'babel-loader'
			}
		]
	}
	// devServer: {
	// 	contentBase: './public'
	// }
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(.js|.jsx)$/,
	// 			loader: 'babel-loader',
	// 			exclude: /node_modules/
	// 		},
	// 		{
	// 			test: /\.(.js|.jsx)$/,
	// 			loader: 'eslint-loader',
	// 			exclude: /node_modules/
	// 		}
	// 	]
	// },
	// resolve: {
	// 	extensions: [ '.js', '.jsx' ]
	// }
};
