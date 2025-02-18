import webpack from 'webpack'
import path from 'path'
import { BuildOptions, buildWebpack, EnvTypes } from '@packages/build-config';
import packageJson from './package.json'

export default (env: EnvTypes): webpack.Configuration => {
   const isDev = env.mode === 'development'
   const isProd = env.mode === 'production'
   const paths: BuildOptions['paths'] = {
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      public: path.resolve(__dirname, 'public'),
   }


   const config=buildWebpack({
      platform: env.platform ?? 'desktop',
      mode: env.mode ?? 'development',
      port: env.port ?? 3002,
      analyzer: env.analyzer,
      isDev,
      isProd,
      paths,
   })

   config.plugins?.push(new webpack.container.ModuleFederationPlugin({
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
         './Router': './src/router/Router.tsx',
      },
      shared: {
         ...packageJson.dependencies,
         react: {eager: true, requiredVersion: packageJson.dependencies['react']},
         'react-dom': {eager: true, requiredVersion: packageJson.dependencies['react-dom']},
         'react-router-dom': {eager: true, requiredVersion: packageJson.dependencies['react-router-dom']},
      },
   }))

   return config
}
