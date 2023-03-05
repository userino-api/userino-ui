import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import React from 'react'
import config from '../config'

Bugsnag.start({
  apiKey: config.bugsnag_api_key,
  plugins: [new BugsnagPluginReact(React)],
  metadata: {
    env: config.env,
  },
  enabledReleaseStages: ['production', 'staging'],
})

export const BugsnagErrorBoundary = Bugsnag.getPlugin('react') as any // any is better than undefined

export default Bugsnag
