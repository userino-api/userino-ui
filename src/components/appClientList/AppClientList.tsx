/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateApp } from '@reducers/apps/reducer'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useDispatch } from 'react-redux'
import RendererStatusSplit from 'react-renderer-status-split'
import useModalState from '../../hooks/useModalState'
import AppClientCreateModal from '../../modals/AppClientCreateModal'
import { ReduxDispatch } from '../../typings/ReduxDispatch'
import Loader from '../Loader'
import AddButton from '../buttons/AddButton'
import ClientItem from './ClientItem'

interface Props {
  app: ReduxStateApp
}
function AppClientList(props: Props) {
  const { app } = props
  const { appClients } = app

  const clientCreateModalState = useModalState()
  const dispatch = useDispatch<ReduxDispatch>()
  const appFetchAction = useAsyncFetch(async () => {
    await dispatch(AppsDispatcher.getAppClients(app.id))
  }, [app.id])

  return (
    <div
      css={css`
        width: 500px;
        margin-top: 20px;
      `}
    >
      <AppClientCreateModal app_id={app.id} {...clientCreateModalState} />

      <Grid
        container
        // justifyContent={'space-between'}
        alignItems={'center'}
        css={css`
          margin-bottom: 30px;
        `}
      >
        <Typography variant={'h3'}>App Clients</Typography>

        <AddButton
          onClick={clientCreateModalState.onOpen}
          css={css`
            margin-left: 30px;
          `}
        />
      </Grid>

      <RendererStatusSplit
        statuses={appFetchAction}
        isEmpty={_.isEmpty(appClients)}
        renderLoading={() => (
          <Grid container justifyContent={'center'}>
            <Loader />
          </Grid>
        )}
        renderError={(error) => <Typography color={'error'}>{error}</Typography>}
        render={() => (
          <div>
            {_.map(appClients, (appClient, index) => (
              <ClientItem key={appClient.id} appClient={appClient} index={index} />
            ))}
          </div>
        )}
      />
    </div>
  )
}

export default AppClientList
