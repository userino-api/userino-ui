import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'

interface Props {
  app: ReduxStateApp
  appClient: AppClient
}

function AppClient(props: Props) {
  const { app, appClient } = props
  const { id, secret } = appClient

  return (
    <div
      css={css`
        padding: 10px 0;
      `}
    >
      <Typography>
        <Typography fontWeight={'bold'} display={'inline'}>
          Client ID:
        </Typography>{' '}
        <span>{id}</span>
      </Typography>

      <Typography>
        <Typography fontWeight={'bold'} display={'inline'}>
          Client Secret:
        </Typography>{' '}
        <span>{secret}</span>
      </Typography>
    </div>
  )
}

export default AppClient
