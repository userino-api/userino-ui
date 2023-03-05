/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Moment from 'react-moment'
import { AppClient } from '../../typings/core'

interface Props {
  appClient: AppClient
  index?: number
}
function ClientItem(props: Props) {
  const { appClient, index } = props
  const { id, name, secret, created_at } = appClient

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
        <div>
          <Typography fontWeight={'bold'}>{name}</Typography>
          <Typography>Client ID: {id}</Typography>
          <Typography>Client Secret: {secret}</Typography>

          <Typography>
            Created At: <Moment format={'LLL'}>{created_at}</Moment>
          </Typography>
        </div>

        {/* <div> */}
        {/*  <FontAwesomeIcon icon={faChevronRight} color={'#fff'} /> */}
        {/* </div> */}
      </Grid>
    </div>
  )
}

export default ClientItem
