/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateApp } from '@reducers/apps/reducer'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useDispatch, useSelector } from 'react-redux'
import RendererStatusSplit from 'react-renderer-status-split'
import useModalState from '../../hooks/useModalState'
import AppAccessAddModal from '../../modals/AppAccessAddModal'
import { ReduxDispatch } from '../../typings/ReduxDispatch'
import Loader from '../Loader'
import AddButton from '../buttons/AddButton'
import AccessItem from './AccessItem'

interface Props {
  app: ReduxStateApp
}
function AppAccessList(props: Props) {
  const { app } = props
  const { access } = app

  const accessAddModalState = useModalState()
  const dispatch = useDispatch<ReduxDispatch>()
  const appFetchAction = useAsyncFetch(async () => {
    await dispatch(AppsDispatcher.getAppAccessList(app.id))
  }, [app.id])

  return (
    <div
      css={css`
        width: 500px;
        margin-top: 20px;
      `}
    >
      <AppAccessAddModal app_id={app.id} {...accessAddModalState} />
      <Grid
        container
        // justifyContent={'space-between'}
        alignItems={'center'}
        css={css`
          margin-bottom: 30px;
        `}
      >
        <Typography variant={'h2'}>App Access List</Typography>

        <AddButton
          onClick={accessAddModalState.onOpen}
          css={css`
            margin-left: 30px;
          `}
        />
      </Grid>
      <RendererStatusSplit
        statuses={appFetchAction}
        isEmpty={_.isEmpty(access)}
        renderLoading={() => (
          <Grid container justifyContent={'center'}>
            <Loader />
          </Grid>
        )}
        renderError={(error) => <Typography color={'error'}>{error}</Typography>}
        render={() => (
          <div>
            {_.map(access, (item, index) => (
              <AccessItem key={item.id} access={item} index={index} />
            ))}
          </div>
        )}
      />
    </div>
  )
}

export default AppAccessList
