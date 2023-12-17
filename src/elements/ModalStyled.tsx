import { css } from '@emotion/react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

const useStyles = makeStyles(
  {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    closeIcon: {
      padding: 5,
      fontSize: 20,
      marginRight: 5,
      cursor: 'pointer',
    },
  },
  {
    classNamePrefix: 'ModalStyled',
  },
)

interface Props {
  isVisible: boolean
  onClose(): any
  children: ReactNode
  className?: string
  showCloseButton?: boolean
}
function ModalStyled(props: Props) {
  const { isVisible, onClose, children, className, showCloseButton } = props
  const classes = useStyles()

  return (
    <Modal open={isVisible} onClose={onClose} className={classes.modal}>
      <Paper
        css={css`
          padding: 20px 20px 20px;
          position: relative;
          min-width: 100px;
          border-radius: 10px;
        `}
        className={classNames(className)}
      >
        {showCloseButton && (
          <div css={css({ position: 'absolute', top: 5, right: 0 })}>
            <FontAwesomeIcon icon={faXmark} className={classes.closeIcon} color={'#c0c0c3'} onClick={onClose} />
          </div>
        )}
        {children}
      </Paper>
    </Modal>
  )
}

export default ModalStyled
