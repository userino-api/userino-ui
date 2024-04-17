import { Divider, Grid, Typography } from '@mui/material'
import AppDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateApp } from '@reducers/apps/reducer'
import { useAppDispatch } from '@reducers/store'
import _ from 'lodash'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import Loader from '../../../../../components/Loader'
import UserItem from './components/UserItem'

interface Props {
  app: ReduxStateApp
}
function Users(props: Props) {
  const { app } = props
  const { id, userCount, users } = app

  const dispatch = useAppDispatch()
  const userFetch = useAsyncFetch(async () => {
    await dispatch(AppDispatcher.getUsers(id))
  }, [id])

  return (
    <div>
      <Grid container justifyContent={'space-between'}>
        <Typography variant={'h2'}>Users</Typography>
        {!!userCount && <Typography>total users: {userCount}</Typography>}
      </Grid>

      <div>
        <RendererStatusSplit
          statuses={userFetch}
          renderLoading={() => (
            <Grid container justifyContent={'center'}>
              <Loader />
            </Grid>
          )}
          render={() =>
            _.map(users, (item, index) => (
              <>
                {!!index && <Divider />}
                <UserItem user={item} />
              </>
            ))
          }
        />
      </div>
    </div>
  )
}

export default Users
