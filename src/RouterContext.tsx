import { createBrowserHistory } from 'history'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

export const history = createBrowserHistory()

export default function RouterContext({ children }: { children: React.ReactElement }) {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>{children}</QueryParamProvider>
    </BrowserRouter>
  )
}
