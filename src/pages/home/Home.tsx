/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid } from '@mui/material'
import AddressDispatcher from '@reducers/address/dispatcher'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useDispatch } from 'react-redux'
import AppBar from '../../components/appBar/AppBar'
import { ReduxDispatch } from '../../typings/ReduxDispatch'
import AppList from '../../components/appList/AppList'
// import { useWallet, UseWalletProvider } from 'use-wallet'

// import { hooks, metaMask } from '../../metaMask'

function Home() {
  const dispatch = useDispatch<ReduxDispatch>()

  return (
    <Grid
      container
      flexDirection={'column'}
      css={css`
        flex-grow: 1;
        position: relative;
        overflow: hidden;
        z-index: 5;
        padding-bottom: 150px;
      `}
    >
      <AppBar />

      <AppList />
    </Grid>
  )
}

export default Home
