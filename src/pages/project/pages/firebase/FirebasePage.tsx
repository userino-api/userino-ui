import { css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React, { useMemo } from 'react'
import useFetchAuthProviders from '../../hooks/useFetchAuthProviders'
import FirebaseConfigFile from './components/FirebaseConfigFile'
import FirebaseEnableButton from './components/FirebaseEnableButton'

interface Props {
  project: ReduxStateProject
}
function FirebasePage(props: Props) {
  const { project } = props
  const { authProviders } = project

  useFetchAuthProviders(project.id)

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
          <FirebaseEnableButton project={project} isEnabled={!!firebaseProvider?.is_enabled} />
        </div>
      </Grid>

      <div>
        <FirebaseConfigFile app_id={project.id} />
      </div>
    </div>
  )
}

export default FirebasePage
