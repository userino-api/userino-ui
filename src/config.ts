/**
 * process.env.API_URL should be only this style.
 * When there other way it can be not replaced. For example: const { API_URL } = process.env
 */
import invariant from 'invariant'
import moment from 'moment'

const isTest = process.env.NODE_ENV === 'test'
const version = process.env.VERSION
const appVersion = process.env.APP_VERSION
const buildTime = process.env.BUILD_TIME
const app = process.env.APP
const env = process.env.APP_ENV || 'development'

console.log('buildTime', buildTime)

console.log(`
********************************************
******  APP: ${app} (${version})
********************************************
`)

const config = {
  version,
  appVersion,
  env,
  api_url: process.env.API_URL as string,

  timeout: process.env.APP_ENV === 'production' ? 120000 : 30000,

  PORT: 3366,
  bugsnag_api_key: '41d806c03a7c18c677be8b6bbe0b493a',

  loggers: {
    isStoreEnabled: true, //! isTest,
  },
}

if (!isTest) {
  console.log('env', config.env)
  if (buildTime) {
    console.log('Build Time:', moment(buildTime).toISOString())
  }
  console.log('config', config)
}

invariant(config.api_url, 'config.api_url is not set')

// @ts-ignore
window.config = config

export default config
