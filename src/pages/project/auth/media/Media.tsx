import { css } from '@emotion/react'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import { ReduxStateProject } from '@reducers/projects/reducer'
import React from 'react'
import colors from '../../../../app/colors'
import useModalState from '../../../../hooks/useModalState'
import MediaClientModal from './MediaClientModal'
import icon from './assets/image-gallery.png'

interface Props {
  project: ReduxStateProject
}
function Media(props: Props) {
  const { project } = props

  const clientModal = useModalState(false)

  return (
    <div>
      <MediaClientModal {...clientModal} project={project} />
      <div
        css={css`
          padding: 10px 20px;
          background: #fff;
          border-radius: 8px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
        `}
      >
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <div>
            <Grid container alignItems={'center'}>
              <img
                src={icon}
                alt={'img'}
                css={css`
                  width: 26px;
                  height: 26px;
                  object-fit: contain;
                `}
              />
              <Typography
                css={css`
                  font-weight: bold;
                  margin-left: 10px;
                `}
              >
                Media
              </Typography>
            </Grid>
          </div>

          <div>
            <Grid container alignItems={'center'} gap={'15px'}>
              {/* <EnabledStatusIndicator isEnabled={isEnabled} /> */}

              {/* <Link to={`${location.pathname}/firebase`}> */}
              <FontAwesomeIcon
                onClick={clientModal.onOpen}
                icon={faGear}
                css={css`
                  color: ${colors.blue};
                  font-size: 22px;
                  cursor: pointer;
                `}
              />
              {/* </Link> */}
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Media
