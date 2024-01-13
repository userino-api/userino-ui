import { css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import ProjectDispatcher from '@reducers/projects/dispatcher'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../../libs/redux'

interface Props {
  project: ReduxStateProject
}
function AppList(props: Props) {
  const { project } = props

  const { id, apps } = project
  const location = useLocation()

  const dispatch = useAppDispatch()
  useAsyncFetch(async () => {
    await dispatch(ProjectDispatcher.getApps(id))
  }, [id])

  return (
    <div>
      <Typography variant={'h2'}>AppList</Typography>

      <Grid container>
        {_.map(apps, (app) => (
          <Link to={`${location.pathname}/app/${app.id}`} key={`app-list/${app.id}`}>
            <div
              css={css`
                background: #fff;
                border: 1px solid #ccc;
                padding: 10px 20px;
                border-radius: 10px;
              `}
            >
              <Typography>{app.name}</Typography>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  )
}

export default AppList
