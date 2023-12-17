import { createGenerateClassName, jssPreset, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles'
import { createRender } from '@material-ui/core/test-utils'
import { create } from 'jss'
import React, { ReactNode } from 'react'
import { JssProvider } from 'react-jss'
import { Provider } from 'react-redux'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import theme from '../src/app/theme'
import store from '@reducers/store'

const generateClassName = createGenerateClassName()
const jss = create(jssPreset())

function TestApp(props: { children: ReactNode; initialEntries?: string[] }) {
  const { children, initialEntries = ['/'] } = props

  return (
    <MemoryRouter initialEntries={initialEntries}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>{children}</Provider>
        </MuiThemeProvider>
      </JssProvider>
    </MemoryRouter>
  )
}

export default TestApp
