import { css } from '@emotion/react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider, Grid, IconButton, Typography } from '@mui/material'
import AppDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateApp } from '@reducers/apps/reducer'
import { useAppDispatch } from '@reducers/store'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch, useAsyncHandler } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import AppClient from './AppClient'

interface Props {
  app: ReduxStateApp
}

function AppClients(props: Props) {
  const { app } = props
  const { id, appClients } = app

  const dispatch = useAppDispatch()
  useAsyncFetch(async () => {
    if (!id) return null
    await dispatch(AppDispatcher.getAppClients(id))
  }, [id])

  const actionCreate = useAsyncHandler(async () => {
    await dispatch(AppDispatcher.createClient(id))
  })

  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant={'h2'}>App api clients</Typography>

        <RendererStatusSplit
          statuses={actionCreate}
          render={() => (
            <IconButton onClick={actionCreate.execute}>
              <FontAwesomeIcon
                icon={faPlus}
                color={'#333'}
                css={css`
                  font-size: 14px;
                `}
              />
            </IconButton>
          )}
        />
      </Grid>

      <div>
        {_.map(appClients, (appClient, index) => (
          <>
            {index > 0 && <Divider />}
            <AppClient app={app} appClient={appClient} />
          </>
        ))}
      </div>
    </div>
  )
}

export default AppClients
