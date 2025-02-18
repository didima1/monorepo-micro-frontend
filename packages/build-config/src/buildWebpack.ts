import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './plugins/buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'

export const buildWebpack = (
   options: BuildOptions,
): webpack.Configuration => {
   const { mode, isDev, paths } = options
   const { entry, output } = paths
   return {
      mode,
      entry,
      output: {
         path: output,
         filename: '[name].[contenthash].js',
         clean: true,
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolvers(options),
      devtool: isDev ? 'inline-source-map' : false,
      devServer: isDev ? buildDevServer(options) : undefined,
   }
}
