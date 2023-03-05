/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import colors from '../../app/colors'

interface Props {
  className?: string
  onClick(): any
}
function AddButton(props: Props) {
  const { className, onClick } = props

  return (
    <div onClick={onClick} className={className}>
      <FontAwesomeIcon
        icon={faPlusCircle}
        color={colors.blue}
        css={css`
          font-size: 20px;
          cursor: pointer;
        `}
      />
    </div>
  )
}

export default AddButton
