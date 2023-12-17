import { css } from '@emotion/react'
import { Container, Divider, Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import Moment from 'react-moment'
import { Route, Routes } from 'react-router-dom'
import AppList from '../app-list/AppList'
import AuthList from '../auth/AuthList'
import FirebasePage from '../pages/firebase/FirebasePage'
import AppPage from "../pages/app/AppPage";

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

        <div>
          <Routes>
            <Route
              index
              element={
                <div>
                  <Typography>
                    Date created: <Moment format={'LLL'}>{created_at}</Moment>
                  </Typography>

                  <AuthList project={project} />

                  <AppList project={project} />
                </div>
              }
            />

            <Route path={'firebase'} element={<FirebasePage app={project} />} />
            <Route path={'app/:id'} element={<AppPage project={project} />} />
          </Routes>
        </div>
      </Container>
    </div>
  )
}

export default ProjectInfo
