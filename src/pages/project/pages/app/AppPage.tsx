import { Grid, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import ProjectDispatcher from '@reducers/projects/dispatcher'
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
  const params = useParams<{ id: string }>()
  const { id } = params
  console.log('params', params)
  const { project } = useAppSelector((state) => ({
    app: state.apps[id as string],
  }))

  const dispatch = useAppDispatch()
  const fetchApp = useAsyncFetch(async () => {
    if (!id) return null
    await dispatch(ProjectDispatcher.getProject(id))
  }, [id])

  return (
    <RendererStatusSplit
      statuses={fetchApp}
      isEmpty={_.isEmpty(project)}
      renderError={(error) => (
        <Typography color={'error'} textAlign={'center'}>
          {error}
        </Typography>
      )}
      renderEmpty={() => <Typography textAlign={'center'}>Project is not found</Typography>}
      renderLoading={() => (
        <Grid container justifyContent={'center'}>
          <Loader />
        </Grid>
      )}
      render={() => <AppInfo app={project} />}
    />
  )
}

export default AppPage
