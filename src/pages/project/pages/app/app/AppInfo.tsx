import { css } from '@emotion/react'
import { Container, Divider, Typography } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'
import React from 'react'
import Moment from 'react-moment'
import AppClients from '../appClients/AppClients'
import Users from '../users/Users'
import AppTabs from './AppTabs'

interface Props {
  app: ReduxStateApp
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
        <Typography variant={'h1'}>App: {name}</Typography>
        <Divider
          css={css`
            background: #ededed;
            margin: 20px 0;
          `}
        />

        <div>
          <div>
            <Typography>
              Date created: <Moment format={'LLL'}>{created_at}</Moment>
            </Typography>

            <Divider
              css={css`
                margin: 20px 0;
              `}
            />
          </div>
        </div>
      </Container>

      <AppTabs app={app} />
    </div>
  )
}

export default AppInfo
