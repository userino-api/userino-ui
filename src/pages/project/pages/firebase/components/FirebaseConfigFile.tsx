import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import apiFirebase from '@reducers/projects/api-firebase'
import React from 'react'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import Loader from '../../../../../components/Loader'
import FirebaseConfigFileEditor from './FirebaseConfigFileEditor'

interface Props {
  app_id: string
}
function FirebaseConfigFile(props: Props) {
  const { app_id } = props

  const fetchConfigAction = useAsyncFetch(async () => {
    const data = await apiFirebase.getConfigFile(app_id)
    return data
  })

  return (
    <div>
      <div>
        <Typography
          css={css`
            margin-bottom: 10px;
          `}
        >
          Firebase google services admin sdk file
        </Typography>
      </div>

      <RendererStatusSplit
        statuses={fetchConfigAction}
        renderError={(error) => <Typography color={'error'}>{error}</Typography>}
        renderLoading={() => <Loader />}
        render={(data) => {
          return <FirebaseConfigFileEditor app_id={app_id} configFile={data?.config || ''} />
        }}
      />
    </div>
  )
}

export default FirebaseConfigFile
