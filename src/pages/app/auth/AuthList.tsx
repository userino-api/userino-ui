import { Typography } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'
import _ from 'lodash'
import React from 'react'
import RendererStatusSplit from 'react-renderer-status-split'
import Loader from '../../../components/Loader'
import useFetchAuthProviders from '../hooks/useFetchAuthProviders'
import Firebase from './Firebase/Firebase'

interface Props {
  app: ReduxStateApp
}
function AuthList(props: Props) {
  const { app } = props
  const { authProviders } = app

  const fetchAuthProviders = useFetchAuthProviders(app.id)

  return (
    <div>
      <RendererStatusSplit
        statuses={fetchAuthProviders}
        isEmpty={_.isEmpty(authProviders)}
        renderError={(error) => <Typography color={'error'}>{error}</Typography>}
        renderLoading={() => <Loader />}
        render={() => (
          <div>
            <Firebase app={app} />
          </div>
        )}
      />
    </div>
  )
}

export default AuthList
