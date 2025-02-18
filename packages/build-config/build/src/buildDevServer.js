export var buildDevServer = function (options) {
    var port = options.port;
    return {
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
};
