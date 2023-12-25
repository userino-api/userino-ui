import { Stack, Typography } from '@mui/material'
import ProjectDispatcher from '@reducers/projects/dispatcher'
import { ReduxStateProject } from '@reducers/projects/reducer'
import React from 'react'
import { useAsyncHandler } from 'react-hooks-async-handlers'
import Loader from '../../../../../components/Loader'
import AntSwitch from '../../../../../elements/mui/AntSwitch'
import RendererActionSplit from '../../../../../libs/RendererActionSplit'
import { useAppDispatch } from '../../../../../libs/redux'

interface Props {
  project: ReduxStateProject
  isEnabled: boolean
}

function FirebaseEnableButton(props: Props) {
  const { project, isEnabled } = props

  const dispatch = useAppDispatch()
  const enableAction = useAsyncHandler(async (isNextEnabled: boolean) => {
    if (isNextEnabled) {
      await dispatch(ProjectDispatcher.enableFirebaseApp(project.id))
    } else {
      await dispatch(ProjectDispatcher.disableFirebaseApp(project.id))
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
