
const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
    .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'production', // TODO: Плохо, добавить зависимости от окружения

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'eval',

    entry: './src/index.tsx',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin({/* options: see below */})]
    },

    output: {
        path: path.resolve(__dirname, './build'),
        // publicPath: '/',
        filename: '[name].[id].[hash].js',
        // chunkFilename: '[name].[id].[contenthash].js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'src/assets/intelligence.ico',
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 100000
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    })
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|eot|ttf|woff|woff2|json)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            extract: true,
                            publicPath: '/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
};
