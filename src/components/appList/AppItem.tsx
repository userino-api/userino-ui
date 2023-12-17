import { css } from '@emotion/react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../../app/colors'

interface Props {
  app: any
  index?: number
}
function AppItem(props: Props) {
  const { app, index } = props
  const { id, name } = app

  return (
    <Link to={`/app/${id}`}>
      <div
        key={id}
        css={[
          css`
            padding: 10px 20px;
            border-bottom: 1px solid #ccc;

            &:hover {
              background: #dfdfdf;
            }
          `,
          index === 0 &&
            css`
              border-top: 1px solid #ccc;
            `,
        ]}
      >
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Typography>{name}</Typography>

          <div>
            <FontAwesomeIcon icon={faChevronRight} color={colors.blue} />
          </div>
        </Grid>
      </div>
    </Link>
  )
}

export default AppItem
