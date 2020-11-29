/* eslint-disable no-undef */
const path = require(`path`)

module.exports = {
	mode: `development`,
	entry: `./src/index.js`,
	output: {
		filename: `bundle.js`,
		path: path.resolve(__dirname, `public`),
	},
	devServer: {
		contentBase: path.resolve(__dirname, `public`),
		open: false,
		port: 1337,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: `babel-loader`,
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: [`.js`, `.jsx`],
		modules: [path.resolve(__dirname, `src`), `node_modules`],
	},
	devtool: `source-map`,
}
