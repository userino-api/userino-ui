import { Grid, Typography } from '@mui/material'
import AppDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import { useParams } from 'react-router-dom'
import Loader from 'src/components/Loader'
import { useAppDispatch, useAppSelector } from '../../../../libs/redux'
import AppInfo from './app/AppInfo'

interface Props {
  project: ReduxStateProject
}
function AppPage(props: Props) {
  const { project } = props
  const params = useParams<{ app_id: string }>()
  const { app_id } = params

  const { app } = useAppSelector((state) => ({
    app: state.apps[app_id as string],
  }))

  const dispatch = useAppDispatch()
  const fetchApp = useAsyncFetch(async () => {
    if (!app_id) return null
    await dispatch(AppDispatcher.getApp(app_id))
  }, [app_id])

  return (
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
  )
}

export default AppPage
