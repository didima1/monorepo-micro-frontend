import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
export var buildResolvers = function (options) {
    return {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    };
};
