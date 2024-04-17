import { css } from '@emotion/react'
import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { UserFull } from '../../../../../../typings/core'

interface Props {
  user: UserFull
}

function UserItem(props: Props) {
  const { user } = props
  const { id, name, avatar_url } = user || {}

  return (
    <Grid
      container
      alignItems={'center'}
      css={css`
        padding: 10px 0;
      `}
    >
      <div
        css={css`
          margin-right: 10px;
        `}
      >
        <Avatar src={avatar_url as string} />
      </div>

      <Typography>{name}</Typography>
    </Grid>
  )
}

export default UserItem
