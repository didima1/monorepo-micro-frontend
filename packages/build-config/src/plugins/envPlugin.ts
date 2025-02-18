import webpack, { Configuration } from 'webpack'
import dotenv from 'dotenv'

const envConfig = dotenv.config().parsed ?? {}
const envVars: Record<string, string> = {}
Object.keys(envConfig).map(key => {
   envVars[`process.env.${key}`] = JSON.stringify(envConfig[key])
})

export const envPlugin = (): NonNullable<
   Configuration['plugins']
>[number] => {
   return new webpack.DefinePlugin(envVars) // Передаем ВСЕ переменные в Webpack
}
