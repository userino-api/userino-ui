/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Button, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useAsyncHandler } from 'react-hooks-async-handlers'
import Loader from '../../../../../components/Loader'
import RendererActionSplit from '../../../../../libs/RendererActionSplit'
import api from '../../../../../libs/userino-admin-api'

interface Props {
  app_id: string
  configFile: string
}
function FirebaseConfigFileEditor(props: Props) {
  const { app_id, configFile } = props
  const configPrevRaw = useMemo(() => {
    if (!configFile) return null
    if (_.isObject(configFile)) return JSON.stringify(configFile)
    return `${configFile}`
  }, [configFile])
  const [configRaw, setConfigRaw] = useState(configPrevRaw || '')

  const fileUploadAction = useAsyncHandler(async () => {
    const json = JSON.parse(configRaw)
    // invariant(json.type === 'service_account', 'Seems you are trying to send wrong config.')
    // todo here we can validate important fields
    await api.saveConfigFile(app_id, { fileRaw: configRaw })
  })

  const isSaveDisabled = !configRaw || configPrevRaw === configRaw

  return (
    <div>
      <div
        css={css`
          margin-bottom: 20px;
        `}
      >
        <TextField
          value={configRaw}
          placeholder={'Paste your firebase config file here'}
          onChange={(e) => setConfigRaw(e.target.value || '')}
          multiline
          fullWidth
          css={css`
            textarea {
              min-height: 200px;
              min-width: 360px;
            }
          `}
        />
      </div>

      <div>
        <RendererActionSplit
          statuses={fileUploadAction}
          renderSuccess={() => <Typography>Saved</Typography>}
          renderLoading={() => <Loader />}
          render={({ error }) => (
            <div>
              <Button
                disabled={isSaveDisabled}
                variant={'contained'}
                color={'primary'}
                onClick={fileUploadAction.execute}
              >
                Save
              </Button>
              <Typography color={'error'}>{error}</Typography>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default FirebaseConfigFileEditor
