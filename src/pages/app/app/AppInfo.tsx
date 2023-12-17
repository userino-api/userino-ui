/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Container, Divider, Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import Moment from 'react-moment'
import { Route, Router, Routes } from 'react-router-dom'
import AuthList from '../auth/AuthList'
import FirebasePage from '../pages/firebase/FirebasePage'

interface Props {
  app: ReduxStateProject
}

function AppInfo(props: Props) {
  const { app } = props
  const { id, name, created_at } = app

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

                  <AuthList project={app} />
                </div>
              }
            />

            <Route path={'firebase'} element={<FirebasePage app={app} />} />
          </Routes>
        </div>
      </Container>
    </div>
  )
}

export default AppInfo
