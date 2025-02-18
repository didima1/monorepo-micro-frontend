import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions, RuleType } from './types/types'
import { removeTestIdPlugin } from './plugins/removeTestIdPlugin'
import ReactRefreshTypeScript from 'react-refresh-typescript';

export const buildLoaders = (options: BuildOptions): RuleType[] => {
   const { isDev, isProd } = options

   const assetLoader = {
      test: /\.(png|webp|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
   }

   const cssLoader = {
      loader: 'css-loader',
      options: {
         modules: {
            localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
         },
      },
   }

   const scssLoader = {
      test: /\.(sa|sc|c)ss$/i,
      use: [
         // Creates `style` nodes from JS strings
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         // Translates CSS into CommonJS
         // "css-loader",
         cssLoader,
         // Compiles Sass to CSS
         'sass-loader',
      ],
   }

   const svgLoader = {
      test: /\.svg$/,
      use: [
         {
            loader: 'svg-sprite-loader', // основной лоадер для спрайтов
            options: {
               extract: isProd,
               // spriteFilename: 'sprite.[hash:6].svg',
               outputPath: 'public/',
            },
         },
         {
            loader: 'svgo-loader', // Оптимизация SVG
            options: {
               plugins: [
                  {
                     name: 'convertColors',
                     params: {
                        currentColor: true,
                     },
                  },
                  {
                     name: 'removeDimensions',
                  },
                  {
                     name: 'removeUselessDefs',
                  },
                  {
                     name: 'removeEmptyAttrs',
                  },
                  {
                     name: 'collapseGroups',
                  },
               ],
            },
         },
      ],
   }

   const typescriptLoader = {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
         loader: 'ts-loader',
         options: {
            // transpileOnly: isDev,
            transpileOnly: true,
            getCustomTransformers: () => ({
               before: [isDev && ReactRefreshTypeScript()].filter(
                  Boolean,
               ),
            }),
         },
      },
   }

   const babelLoader = {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: [
               '@babel/preset-env',
               '@babel/preset-typescript',
               ['@babel/preset-react', { 'runtime': isDev ? 'automatic' : 'classic' }],
            ],
            plugins: [
               isProd && [
                  removeTestIdPlugin,
                  {
                     props: ['data-testid'],
                  },
               ],
            ].filter(Boolean),
         },
      },
   }

   return [assetLoader, scssLoader, svgLoader, typescriptLoader]
}
