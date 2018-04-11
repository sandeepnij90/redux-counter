const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new extractTextWebpackPlugin({
    filename: 'index.css'
});

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            compact: false,
                            presets: ['react', 'env', 'stage-2']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use:['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|png)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[
        extractPlugin,
        new htmlPlugin({
            template : 'src/index.html'
        })
    ]
}