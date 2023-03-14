/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
  isEnabled: boolean
  className?: string
}
function EnabledStatusIndicator(props: Props) {
  let { isEnabled, className } = props

  const text = isEnabled ? 'Enabled' : 'Disabled'

  return (
    <div
      css={[
        css`
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 16px;
          padding: 2px 15px;
        `,
        !isEnabled &&
          css`
            background: #f1f1f1;
          `,
      ]}
      className={className}
    >
      <Grid container alignItems={'center'}>
        {isEnabled && (
          <div
            css={css`
              width: 8px;
              height: 8px;
              border-radius: 4px;
              background: #68d549;
              margin-right: 8px;
            `}
          />
        )}
        <Typography>{text}</Typography>
      </Grid>
    </div>
  )
}

export default EnabledStatusIndicator
