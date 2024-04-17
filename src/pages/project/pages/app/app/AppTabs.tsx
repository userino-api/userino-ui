import { css } from '@emotion/react'
import { Grid } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'
import clsx from 'clsx'
import React, { useState } from 'react'
import AppClients from '../appClients/AppClients'
import Users from '../users/Users'
import { StyledTab } from './AppTaba.styled'

interface Props {
  app: ReduxStateApp
}

function AppInfo(props: Props) {
  const { app } = props

  const [tab, setTab] = useState<'users' | 'api_clients'>('users')

  return (
    <Grid container>
      <div
        css={css`
          width: 200px;
        `}
      >
        <StyledTab className={clsx({ active: tab === 'users' })} onClick={() => setTab('users')}>
          Users
        </StyledTab>
        <StyledTab className={clsx({ active: tab === 'api_clients' })} onClick={() => setTab('api_clients')}>
          Api Clients
        </StyledTab>
      </div>

      <div
        css={css`
          margin-left: 30px;
          margin-right: 50px;
          flex-grow: 1;
        `}
      >
        {tab === 'users' && <Users app={app} />}

        {tab === 'api_clients' && <AppClients app={app} />}
      </div>
    </Grid>
  )
}

export default AppInfo
