import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import { envPlugin } from './envPlugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
export var buildPlugins = function (options) {
    var isProd = options.isProd, isDev = options.isDev, paths = options.paths, analyzer = options.analyzer;
    var html = paths.html;
    var plugins = [
        new HtmlWebpackPlugin({
            template: html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
            publicPath: '/',
        }),
        envPlugin(),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin(), 
        // new ForkTsCheckerWebpackPlugin(),
        new ReactRefreshWebpackPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }), 
        //    TODO убрать игнор
        // @ts-ignore
        new SpriteLoaderPlugin(), new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(paths.public, 'locales'),
                    to: path.resolve(paths.output, 'locales'),
                },
            ],
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
        }));
    }
    return plugins;
};
