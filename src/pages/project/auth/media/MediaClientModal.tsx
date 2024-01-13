import { css } from '@emotion/react'
import { Alert, Button, Grid, OutlinedInput, Snackbar, Typography } from '@mui/material'
import apiMedia from '@reducers/projects/api/api-media'
import { ReduxStateProject } from '@reducers/projects/reducer'
import React, { useState } from 'react'
import { useAsyncFetch, useAsyncHandler } from 'react-hooks-async-handlers'
import RendererStatusSplit from 'react-renderer-status-split'
import Loader from 'src/components/Loader'
import ModalStyled from '../../../../elements/ModalStyled'
import useModalState from '../../../../hooks/useModalState'

interface Props {
  project: ReduxStateProject
  isVisible: boolean
  onClose(): any
}
function MediaClientModal(props: Props) {
  const { isVisible, onClose, project } = props
  const [clientId, setClientId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const successMessageState = useModalState()

  const saveAction = useAsyncHandler(async () => {
    await apiMedia.saveConfigFile(project.id, {
      client_id: clientId,
      client_secret: clientSecret,
    })
    successMessageState.onOpen()
    onClose()
  })

  const actionFetch = useAsyncFetch(async () => {
    const mediaConfig = await apiMedia.getConfigFile(project.id)
    const { client_id, client_secret } = mediaConfig || {}
    if (client_id) {
      setClientId(client_id)
    }
    if (client_secret) {
      setClientSecret(client_secret)
    }
  }, [project.id])

  const handleClickSave = () => {
    // ...
    saveAction.execute()
  }

  const isButtonDisabled = !clientId || !clientSecret

  return (
    <>
      <ModalStyled
        isVisible={isVisible}
        onClose={onClose}
        showCloseButton
        css={css`
          width: 350px;
        `}
      >
        <div>
          <Typography
            variant={'h3'}
            css={css`
              margin-bottom: 10px;
            `}
          >
            Media client
          </Typography>

          <RendererStatusSplit
            statuses={actionFetch}
            renderLoading={() => (
              <Grid
                container
                justifyContent={'center'}
                css={css`
                  margin-top: 30px;
                `}
              >
                <Loader />
              </Grid>
            )}
            render={() => (
              <div>
                <div>
                  <OutlinedInput
                    fullWidth
                    value={clientId}
                    placeholder={'Client ID'}
                    onChange={(e) => setClientId(e.target.value)}
                    css={css`
                      margin-bottom: 10px;
                    `}
                  />
                  <OutlinedInput
                    fullWidth
                    value={clientSecret}
                    placeholder={'Client Secret'}
                    onChange={(e) => setClientSecret(e.target.value)}
                  />
                </div>

                <Grid
                  container
                  justifyContent={'center'}
                  css={css`
                    margin-top: 30px;
                  `}
                >
                  <Button
                    variant={'contained'}
                    onClick={handleClickSave}
                    css={css`
                      width: 100px;
                    `}
                    disabled={isButtonDisabled}
                  >
                    Save
                  </Button>
                </Grid>
              </div>
            )}
          />
        </div>
      </ModalStyled>

      <Snackbar open={successMessageState.isVisible} autoHideDuration={3000} onClose={successMessageState.onClose}>
        <Alert onClose={successMessageState.onClose} severity="success" sx={{ width: '100%' }}>
          Configuration saved!
        </Alert>
      </Snackbar>
    </>
  )
}

export default MediaClientModal
