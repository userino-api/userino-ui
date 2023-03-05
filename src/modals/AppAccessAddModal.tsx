/** @jsx jsx */
import { css, jsx } from '@emotion/react'
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

function AppAccessAddModal(props: Props) {
  const { app_id, isVisible, onClose } = props
  const [name, setName] = useState('')
  const [public_key, setPublicKey] = useState('')

  const dispatch = useAppDispatch()
  const createAction = useAsyncHandler(async () => {
    await dispatch(AppsDispatcher.addAccess(app_id, { name, public_key }))
    handleClose()
  })

  const isDisabled = !name && !public_key

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
        width: 400px;
      `}
    >
      <Typography
        variant={'h2'}
        css={css`
          margin-bottom: 30px;
        `}
      >
        Add new admin access to app
      </Typography>

      <div>
        <div>
          <TextField value={name} placeholder={'Name'} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <TextField
            value={public_key}
            placeholder={'Public Key'}
            multiline
            fullWidth
            css={css`
              margin-top: 10px;

              textarea {
                min-height: 150px;
              }
            `}
            onChange={(e) => setPublicKey(e.target.value)}
          />
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
                Add
              </Button>
            )
          }}
        />
      </Grid>
    </ModalStyled>
  )
}

export default AppAccessAddModal
