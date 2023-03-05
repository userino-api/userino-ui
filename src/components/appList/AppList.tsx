/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Typography } from '@mui/material'
import { ReduxState } from '@reducers/index'
import SpaceDispatcher from '@reducers/space/dispatcher'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useDispatch, useSelector } from 'react-redux'
import RendererStatusSplit from 'react-renderer-status-split'
import colors from '../../app/colors'
import useModalState from '../../hooks/useModalState'
import AppCreateModal from '../../modals/AppCreateModal'
import { ReduxDispatch } from '../../typings/ReduxDispatch'
import Loader from '../Loader'
import AddButton from '../buttons/AddButton'
import AppItem from './AppItem'

function AppList() {
  const dispatch = useDispatch<ReduxDispatch>()
  const appCreateModalState = useModalState()
  const appFetchAction = useAsyncFetch(async () => {
    await dispatch(SpaceDispatcher.getApps())
  })
  const { apps } = useSelector((state: ReduxState) => ({
    apps: state.space.apps,
  }))

  return (
    <Container>
      <AppCreateModal {...appCreateModalState} />
      <div
        css={css`
          width: 500px;
          margin-top: 20px;
        `}
      >
        <Grid
          container
          justifyContent={'space-between'}
          alignItems={'center'}
          css={css`
            margin-bottom: 30px;
          `}
        >
          <Typography variant={'h1'}>Apps</Typography>

          <AddButton onClick={appCreateModalState.onOpen} />
        </Grid>

        <RendererStatusSplit
          statuses={appFetchAction}
          isEmpty={_.isEmpty(apps)}
          renderLoading={() => (
            <Grid container justifyContent={'center'}>
              <Loader />
            </Grid>
          )}
          renderError={(error) => <Typography color={'error'}>{error}</Typography>}
          render={() => (
            <div>
              {_.map(apps, (app, index) => (
                <AppItem key={app.id} app={app} index={index} />
              ))}
            </div>
          )}
        />
      </div>
    </Container>
  )
}

export default AppList
