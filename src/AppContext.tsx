import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import store from '@reducers/store'
import React from 'react'
import { Provider } from 'react-redux'
import theme from './app/theme'
import ErrorMessageProvider from './libs/ErrorMessageProvider'
// import { hooks as metaMaskHooks, metaMask } from './metaMask'

export default function AppContext({ children }: { children: React.ReactElement }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ErrorMessageProvider>{children}</ErrorMessageProvider>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
