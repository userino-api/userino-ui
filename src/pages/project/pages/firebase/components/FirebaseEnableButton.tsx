import { Stack, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import { ReduxStateApp } from '@reducers/apps/reducer'
import React from 'react'
import { useAsyncHandler } from 'react-hooks-async-handlers'
import Loader from '../../../../../components/Loader'
import AntSwitch from '../../../../../elements/mui/AntSwitch'
import RendererActionSplit from '../../../../../libs/RendererActionSplit'
import { useAppDispatch } from '../../../../../libs/redux'

interface Props {
  app: ReduxStateApp
  isEnabled: boolean
}

function FirebaseEnableButton(props: Props) {
  const { app, isEnabled } = props

  const dispatch = useAppDispatch()
  const enableAction = useAsyncHandler(async (isNextEnabled: boolean) => {
    if (isNextEnabled) {
      await dispatch(AppsDispatcher.enableFirebaseApp(app.id))
    } else {
      await dispatch(AppsDispatcher.disableFirebaseApp(app.id))
    }
  })

  const handleChange = (e, isChecked) => {
    enableAction.execute(isChecked)
  }

  return (
    <div>
      <div>
        <RendererActionSplit
          statuses={enableAction}
          renderLoading={() => <Loader scale={0.4} />}
          render={() => (
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Off</Typography>
              <AntSwitch checked={isEnabled} onChange={handleChange} />
              <Typography>On</Typography>
            </Stack>
          )}
        />

        <Typography color={'error'}>{enableAction.error}</Typography>
      </div>
    </div>
  )
}

export default FirebaseEnableButton
