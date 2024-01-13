import { Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React from 'react'
import RendererStatusSplit from 'react-renderer-status-split'
import Loader from '../../../components/Loader'
import useFetchAuthProviders from '../hooks/useFetchAuthProviders'
import Firebase from './Firebase/Firebase'
import Media from './media/Media'

interface Props {
  project: ReduxStateProject
}
function AuthList(props: Props) {
  const { project } = props
  const { authProviders } = project

  const fetchAuthProviders = useFetchAuthProviders(project.id)

  return (
    <div>
      <RendererStatusSplit
        statuses={fetchAuthProviders}
        isEmpty={_.isEmpty(authProviders)}
        renderError={(error) => <Typography color={'error'}>{error}</Typography>}
        renderLoading={() => <Loader />}
        render={() => (
          <div>
            <Firebase project={project} />
            <Media project={project} />
          </div>
        )}
      />
    </div>
  )
}

export default AuthList
