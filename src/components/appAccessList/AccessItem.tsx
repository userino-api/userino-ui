/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { AppAccess } from '../../typings/core'

interface Props {
  access: AppAccess
  index?: number
}
function AccessItem(props: Props) {
  const { access, index } = props
  const { id, name, public_key } = access

  return (
    <div
      key={id}
      css={[
        css`
          padding: 10px 20px;
          border-bottom: 1px solid #fff;
        `,
        index === 0 &&
          css`
            border-top: 1px solid #fff;
          `,
      ]}
    >
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Typography>
          <Typography
            fontWeight={'bold'}
            css={css`
              display: inline-block;
              margin-right: 7px;
            `}
          >
            Name:
          </Typography>
          {name}
        </Typography>

        <Typography>
          <Typography fontWeight={'bold'}>Public Key:</Typography>
          {public_key}
        </Typography>

        <div>
          <FontAwesomeIcon icon={faChevronRight} color={'#fff'} />
        </div>
      </Grid>
    </div>
  )
}

export default AccessItem
