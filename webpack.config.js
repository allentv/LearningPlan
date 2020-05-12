const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    devServer: {
        hot: true,
        compress: true,
        port: 10000
    },
    entry: {
        javascript: './src/main.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, 'src/components'),
            'node_modules'
        ]
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: 'Learning Plan'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        loaders: [{
                loader: 'file-loader?name=img/[path][name].[ext]',
                test: /\.(jpg|jpeg|gif|png)$/,
            },
            {

                loader: 'file-loader?name=img/[path][name].[ext]',
                test: /\.(eof|woff|woff2|svg)$/,
            },
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                modules: true,
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            query: {
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                modules: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            query: {
                                includePaths: [
                                    path.resolve(__dirname, 'node_modules/bootstrap/scss/'),
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    }
};