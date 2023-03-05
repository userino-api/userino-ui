import { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES, CracoConfig } from '@craco/craco'
import BabelRcPlugin from '@jackwilsdon/craco-use-babelrc'
import Dotenv from 'dotenv-webpack'
import moment from 'moment'
import webpack from 'webpack'
import { BugsnagBuildReporterPlugin } from 'webpack-bugsnag-plugins'
import packageJson from './package.json'

process.env.CI = ''
process.env.PORT = '5555'
const env = process.env.APP_ENV || 'development'

const versionSplit = packageJson.version.split('.')

// @ts-ignore
const craco: CracoConfig = {
  reactScriptsVersion: 'react-scripts',
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      // loaderOptions: {
      //   /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      // },
      // loaderOptions: (cssLoaderOptions, { env, paths }) => {
      //   return cssLoaderOptions
      // },
    },
    //   sass: {
    //     loaderOptions: {
    //       /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
    //     },
    //     loaderOptions: (sassLoaderOptions, { env, paths }) => {
    //       return sassLoaderOptions
    //     },
    //   },
    //   postcss: {
    //     mode: 'extends' /* (default value) */ || 'file',
    //     plugins: [require('plugin-to-append')], // Additional plugins given in an array are appended to existing config.
    //     plugins: (plugins) => [require('plugin-to-prepend')].concat(plugins), // Or you may use the function variant.
    //     env: {
    //       autoprefixer: {
    //         /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
    //       },
    //       stage: 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
    //       features: {
    //         /* Any CSS features: https://preset-env.cssdb.org/features. */
    //       },
    //     },
    //     loaderOptions: {
    //       /* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */
    //     },
    //     loaderOptions: (postcssLoaderOptions, { env, paths }) => {
    //       return postcssLoaderOptions
    //     },
    //   },
  },
  eslint: {
    enable: false,
    // mode: 'extends' /* (default value) */ || 'file',
    // configure: {
    //   /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
    // },
    // configure: (eslintConfig, { env, paths }) => {
    //   return eslintConfig
    // },
    // pluginOptions: {
    //   /* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
    // },
    // pluginOptions: (eslintOptions, { env, paths }) => {
    //   return eslintOptions
    // },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {
      babelrc: true,
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    // loaderOptions: (babelLoaderOptions, { env, paths }) => {
    //   console.log('babelLoaderOptions', babelLoaderOptions)
    //   return babelLoaderOptions
    // },
  },
  typescript: {
    enableTypeChecking: false,
  },
  webpack: {
    alias: {},
    plugins: {
      add: [
        new Dotenv({ path: '.env.local', expand: false }),
        new Dotenv({ path: `.env.${env}`, expand: false }),
        new Dotenv({ expand: false }),
        new webpack.EnvironmentPlugin({
          APP_ENV: process.env.APP_ENV || 'development',
          BUILD_TIME: Date.now(),
          VERSION: `${moment().format('YYYY.MM.DD')}.${versionSplit[versionSplit.length - 1]}`,
          VERSION_APP: packageJson.version,
          APP: packageJson.name,
        }),
      ],
      // add: [
      //   plugin1,
      //   [plugin2, 'append'],
      //   [plugin3, 'prepend'] /* Specify if plugin should be appended or prepended */,
      // ] /* An array of plugins */,
      remove: [
        'ForkTsCheckerWebpackPlugin',
        'DefinePlugin', // delete default dotenv based on NODE_ENV
      ],
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
      stats: {
        warnings: false,
      },
      resolve: {
        fallback: {
          // assert: require.resolve('assert'),
          // crypto: require.resolve('crypto-browserify'),
          // http: require.resolve('stream-http'),
          // https: require.resolve('https-browserify'),
          // os: require.resolve('os-browserify/browser'),
          // stream: require.resolve('stream-browserify'),
        },
      },
    },
    // configure: (webpackConfig) => ({
    //   ...webpackConfig,
    //   module: {
    //     ...webpackConfig.module,
    //     // @ts-ignore
    //     rules: webpackConfig.module.rules.map((rule) => {
    //       // @ts-ignore
    //       if (!rule.oneOf) return rule
    //       return {
    //         // @ts-ignore
    //         ...rule,
    //         // @ts-ignore
    //         oneOf: rule.oneOf.map((ruleObject) => {
    //           if (!new RegExp(ruleObject.test).test('.ts') || !ruleObject.include) return ruleObject
    //           console.log(1)
    //           return { ...ruleObject, include: ruleObject.include.replace('/src', '') }
    //         }),
    //       }
    //     }),
    //   },
    // }),
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    // configure: {
    //   /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */
    // },
    // configure: (jestConfig, { env, paths, resolve, rootDir }) => {
    //   return jestConfig
    // },
  },
  // devServer: {
  //   /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */
  // },
  devServer: (devServerConfig, { env, paths }) => {
    return devServerConfig
  },
  plugins: [
    { plugin: BabelRcPlugin },
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
          return cracoConfig
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          if (env === 'production') {
            if (!webpackConfig.plugins) return webpackConfig
            webpackConfig.plugins.push(
              new BugsnagBuildReporterPlugin({
                apiKey: '033ec56f6440b2ab13fabd3d7c6ed3ec',
                appVersion: packageJson.version,
              }),
            )
          }
          return webpackConfig
        },
        overrideDevServerConfig: ({
          devServerConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths, proxy, allowedHost },
        }) => {
          return devServerConfig
        },
        overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => {
          return jestConfig
        },
      },
      options: {},
    },
  ],
}

export default craco
