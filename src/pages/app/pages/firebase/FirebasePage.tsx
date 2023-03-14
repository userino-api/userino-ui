/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'
import { ReduxState } from '@reducers/index'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import useFetchAuthProviders from '../../hooks/useFetchAuthProviders'
import FirebaseConfigFile from './components/FirebaseConfigFile'
import FirebaseEnableButton from './components/FirebaseEnableButton'

interface Props {
  app: ReduxStateApp
}
function FirebasePage(props: Props) {
  const { app } = props
  const { authProviders } = app

  useFetchAuthProviders(app.id)

  const firebaseProvider = useMemo(() => {
    return _.find(authProviders, (item) => item.key === 'firebase')
  }, [authProviders])

  return (
    <div
      css={css`
        padding-bottom: 50px;
      `}
    >
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Typography
          variant={'h2'}
          css={css`
            margin-bottom: 20px;
          `}
        >
          Firebase
        </Typography>

        <div>
          <FirebaseEnableButton app={app} isEnabled={!!firebaseProvider?.is_enabled} />
        </div>
      </Grid>

      <div>
        <FirebaseConfigFile app_id={app.id} />
      </div>
    </div>
  )
}

export default FirebasePage
