import { css } from '@emotion/react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import ProjectDispatcher from '@reducers/projects/dispatcher'
import React, { useState } from 'react'
import { useAsyncHandler } from 'react-hooks-async-handlers'
import Loader from '../components/Loader'
import ModalStyled from '../elements/ModalStyled'
import RendererActionSplit from '../libs/RendererActionSplit'
import { useAppDispatch } from '../libs/redux'

interface Props {
  isVisible: boolean
  onClose(): any
}

function AppCreateModal(props: Props) {
  const { isVisible, onClose } = props
  const [name, setName] = useState('')

  const dispatch = useAppDispatch()
  const createAction = useAsyncHandler(async () => {
    await dispatch(ProjectDispatcher.createProject({ name }))
    handleClose()
  })

  function handleClose() {
    onClose()
    setName('')
    createAction.reset()
  }

  const isDisabled = !name

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
        Create new app
      </Typography>

      <div>
        <div>
          <TextField placeholder={'name'} value={name} variant={'outlined'} onChange={(e) => setName(e.target.value)} />
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

export default AppCreateModal
