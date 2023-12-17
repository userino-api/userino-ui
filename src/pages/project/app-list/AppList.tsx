import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import ProjectDispatcher from '@reducers/projects/dispatcher'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useAppDispatch } from '../../../libs/redux'

interface Props {
  project: ReduxStateProject
}
function AppList(props: Props) {
  const { project } = props

  const { id, apps } = project

  const dispatch = useAppDispatch()
  useAsyncFetch(async () => {
    await dispatch(ProjectDispatcher.getApps(id))
  }, [id])

  return (
    <div>
      <Typography variant={'h2'}>AppList</Typography>

      <div>
        {_.map(apps, (app) => (
          <div
            css={css`
              background: #fff;
              border: 1px solid #ccc;
              padding: 20px 50px;
            `}
          >
            <Typography>{app.name}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppList
