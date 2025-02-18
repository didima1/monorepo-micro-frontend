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
      port: env.port ?? 3000,
      analyzer: env.analyzer,
      isDev,
      isProd,
      paths,
   })

   const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
   const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL??'http://localhost:3002';

   config.plugins?.push(new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
         shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
         admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
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
