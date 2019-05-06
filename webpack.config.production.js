const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 3000;

const VENDOR_LIBS = ['react-router-dom','react-dom','react'];
module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/index.js',
        vendor:VENDOR_LIBS
    },
    output: {
        filename: 'static/[name].[hash].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                importLoaders:1,
                                camelCase:true,
                                sourceMap:true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    chunks: 'initial',
                    test:'vendor',
                    name:'vendor',
                    enforce:true
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new ExtractTextPlugin({
            filename: 'styles/styles.[hash].css',
            allChunks: true
        })
    ],    
};
