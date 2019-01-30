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
				test: /\.js/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}

	// resolve: {
	// 	extensions: [ '.js', '.jsx' ]
	// }
};
