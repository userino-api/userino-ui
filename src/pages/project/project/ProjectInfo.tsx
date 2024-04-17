import { css } from '@emotion/react'
import { Container, Divider, Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import React from 'react'
import Moment from 'react-moment'
import { Route, Routes } from 'react-router-dom'
import AppList from '../app-list/AppList'
import AuthList from '../auth/AuthList'
import AppPage from '../pages/app/AppPage'
import FirebasePage from '../pages/firebase/FirebasePage'

interface Props {
  project: ReduxStateProject
}

function ProjectInfo(props: Props) {
  const { project } = props
  const { id, name, created_at } = project

  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <Container>
        <Typography variant={'h1'}>Project: {name}</Typography>

        <Divider
          css={css`
            background: #ededed;
            margin: 20px 0;
          `}
        />
      </Container>

      <div>
        <Routes>
          <Route
            index
            element={
              <Container>
                <Typography>
                  Date created: <Moment format={'LLL'}>{created_at}</Moment>
                </Typography>

                <AuthList project={project} />

                <AppList project={project} />
              </Container>
            }
          />

          <Route path={'firebase'} element={<FirebasePage project={project} />} />
          <Route path={'app/:app_id'} element={<AppPage project={project} />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProjectInfo
