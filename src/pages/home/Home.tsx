import { css } from '@emotion/react'
import { Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '../../components/appBar/AppBar'
import ProjectList from '../../components/appList/ProjectList'
import { ReduxDispatch } from '../../typings/ReduxDispatch'

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

      <ProjectList />
    </Grid>
  )
}

export default Home
