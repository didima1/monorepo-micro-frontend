import { Configuration } from 'webpack'
import { BuildOptions } from './types/types'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

export const buildResolvers = (
   options: BuildOptions,
): Configuration['resolve'] => {
   return {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
   }
}
