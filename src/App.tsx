import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import AppContext from './AppContext'
import Routes from './Router'
import { BugsnagErrorBoundary } from './libs/bugSnag'
import store, { persistor } from './store'

export default function () {
  return (
    <BugsnagErrorBoundary>
      <AppContext>
        <PersistGate loading={null} persistor={persistor}>
          {/* <StatusListeners /> */}
          {/* <CssBaseline /> */}

          <Routes />
        </PersistGate>
      </AppContext>
    </BugsnagErrorBoundary>
  )
}
