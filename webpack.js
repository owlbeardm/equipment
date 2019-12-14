const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



// Common config for both develop and production confugurations
function getCommonConfig() {
	return {
		entry: {
			app: './src/index.js'
		},
		module: {
			rules: [{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			}, {
				test: /\.html$/,
				use: ['html-loader']
			}, {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}, {
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}, {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}]
		},
		plugins: [
			new CleanWebpackPlugin({
				verbose: true
			}),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: 'index.html'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css'
			}),
			new webpack.HashedModuleIdsPlugin()
		]
	}
}


// Webpack main fuction (args can be for dev or prod building)
module.exports = (env, argv) => {
	const config = getCommonConfig();
	if (argv.mode === 'development') {
		config.devtool = 'inline-source-map';
		config.devServer = {
			contentBase: './dist',
			historyApiFallback: true,
			publicPath: '/',
			port: 3001
		};
		config.output = {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js'
		};
	}
	if (argv.mode === 'production') {
		config.output = {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash].js'
		};
		config.devtool = 'inline-source-map';
		config.devServer = {
			contentBase: './dist',
			historyApiFallback: true,
			publicPath: '/'
		};
		config.optimization = {
			minimizer: [
				new TerserPlugin(), new OptimizeCSSAssetsPlugin({})
			],
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true,
						// maxSize: 244000
					},
					res: {
						name: 'res',
						test: /\.json/,
						// chunks: 'all',
						enforce: true,
						maxSize: 244000
					},
					vendor: {
						name: 'vendor',
						test: /[\\/]node_modules[\\/]/,
						// chunks: 'all',
						enforce: true,
						maxSize: 244000
					}
				}
			}
		};
	}

	return config;
}
