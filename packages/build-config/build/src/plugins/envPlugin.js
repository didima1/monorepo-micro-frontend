var _a;
import webpack from 'webpack';
import dotenv from 'dotenv';
var envConfig = (_a = dotenv.config().parsed) !== null && _a !== void 0 ? _a : {};
var envVars = {};
Object.keys(envConfig).map(function (key) {
    envVars["process.env.".concat(key)] = JSON.stringify(envConfig[key]);
});
export var envPlugin = function () {
    return new webpack.DefinePlugin(envVars); // Передаем ВСЕ переменные в Webpack
};
