import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './plugins/buildPlugins';
import { buildResolvers } from './buildResolvers';
export var buildWebpack = function (options) {
    var mode = options.mode, isDev = options.isDev, paths = options.paths;
    var entry = paths.entry, output = paths.output;
    return {
        mode: mode,
        entry: entry,
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
    };
};
