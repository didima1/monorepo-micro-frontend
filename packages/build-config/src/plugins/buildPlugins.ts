import path from 'path'
import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from '../types/types'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import { envPlugin } from './envPlugin'
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
   const { isProd, isDev, paths, analyzer } = options
   const { html } = paths

   const plugins: Configuration['plugins'] = [
      new HtmlWebpackPlugin({
         template: html,
         favicon: path.resolve(paths.public, 'favicon.ico'),
         publicPath: '/',
      }),
      envPlugin(),
   ]

   if (isDev) {
      plugins.push(
          new webpack.ProgressPlugin(),
          // new ForkTsCheckerWebpackPlugin(),
          new ReactRefreshWebpackPlugin()
      )
   }

   if (isProd) {
      plugins.push(
         new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
         }),
         //    TODO убрать игнор
         // @ts-ignore
         new SpriteLoaderPlugin(),
         new CopyPlugin({
            patterns: [
               {
                  from: path.resolve(paths.public, 'locales'),
                  to: path.resolve(paths.output, 'locales'),
               },
            ],
         }),
      )
   }

   if (analyzer) {
      plugins.push(
         new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
         }),
      )
   }
   return plugins
}
