const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

const VENDOR_LIBS = ['react-router-dom','react-dom','react'];
module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        vendor:VENDOR_LIBS
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true,
                            camelCase:true,
                            sourceMap:true
                        }
                    }
                ]
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
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    },
    
};
