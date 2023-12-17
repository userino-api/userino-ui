import { css } from '@emotion/react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import AppsDispatcher from '@reducers/apps/dispatcher'
import React, { useState } from 'react'
import { useAsyncHandler } from 'react-hooks-async-handlers'
import Loader from '../components/Loader'
import ModalStyled from '../elements/ModalStyled'
import RendererActionSplit from '../libs/RendererActionSplit'
import { useAppDispatch } from '../libs/redux'

interface Props {
  app_id: string
  isVisible: boolean
  onClose(): any
}

function AppClientCreateModal(props: Props) {
  const { app_id, isVisible, onClose } = props
  const [name, setName] = useState('')

  const dispatch = useAppDispatch()
  const createAction = useAsyncHandler(async () => {
    await dispatch(AppsDispatcher.createClient(app_id, { name }))
    handleClose()
  })

  const isDisabled = !name

  function handleClose() {
    onClose()
    setName('')
    createAction.reset()
  }

  return (
    <ModalStyled
      isVisible={isVisible}
      onClose={onClose}
      showCloseButton
      css={css`
        max-width: 400px;
      `}
    >
      <Typography
        variant={'h2'}
        css={css`
          margin-bottom: 30px;
        `}
      >
        Create new client
      </Typography>

      <div>
        <div>
          <TextField value={name} placeholder={'Name'} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>

      <Grid
        container
        justifyContent={'center'}
        css={css`
          margin-top: 20px;
          padding: 10px 20px;
        `}
      >
        <RendererActionSplit
          statuses={createAction}
          renderLoading={() => <Loader />}
          renderError={(error) => <Typography color={'error'}>{error}</Typography>}
          render={() => {
            return (
              <Button variant={'contained'} fullWidth disabled={isDisabled} onClick={createAction.execute}>
                Create
              </Button>
            )
          }}
        />
      </Grid>
    </ModalStyled>
  )
}

export default AppClientCreateModal
