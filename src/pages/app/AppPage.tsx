import { Grid, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import AppBar from '../../components/appBar/AppBar'
import { useAppDispatch, useAppSelector } from '../../libs/redux'
import AppInfo from './app/AppInfo'

function AppPage() {
  const { id } = useParams<{ id: string }>()
  const { app } = useAppSelector((state) => ({
    app: state.apps[id as string],
  }))

  const dispatch = useAppDispatch()
  const fetchApp = useAsyncFetch(async () => {
    if (!id) return null
    await dispatch(AppsDispatcher.getApp(id))
  }, [id])

  return (
    <div>
      <AppBar />
      <RendererStatusSplit
        statuses={fetchApp}
        isEmpty={_.isEmpty(app)}
        renderError={(error) => (
          <Typography color={'error'} textAlign={'center'}>
            {error}
          </Typography>
        )}
        renderEmpty={() => <Typography textAlign={'center'}>App is not found</Typography>}
        renderLoading={() => (
          <Grid container justifyContent={'center'}>
            <Loader />
          </Grid>
        )}
        render={() => <AppInfo app={app} />}
      />
    </div>
  )
}

export default AppPage
