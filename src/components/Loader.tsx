import { css } from '@emotion/react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import React from 'react'
import { FadeLoader } from 'react-spinners'
import colors from '../app/colors'

const useStyles = makeStyles(
  {
    container: {
      position: 'relative',
      minWidth: 10,
      width: 30,
      height: '50px',
    },
    loader: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  {
    classNamePrefix: 'Loader',
  },
)

interface Props {
  scale?: number
  className?: string
  color?: string
  type?: 'absolute'
}

function Loader(props: Props) {
  const { scale = 0.5, className, color = colors.blue, type } = props

  const classes = useStyles()

  return (
    <div className={classNames(classes.container, className)} style={{ transform: `scale(${scale})` }}>
      <div
        css={
          type === 'absolute' &&
          css`
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          `
        }
      >
        <FadeLoader color={color} />
      </div>
    </div>
  )
}

export default Loader
