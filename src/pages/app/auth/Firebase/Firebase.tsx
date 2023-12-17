/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import { ReduxStateApp } from '@reducers/apps/reducer'
import { ReduxStateProject } from '@reducers/projects/reducer'
import _ from 'lodash'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import colors from '../../../../app/colors'
import EnabledStatusIndicator from '../components/EnabledStatusIndicator'
import icon from './assets/firebase.png'

interface Props {
  project: ReduxStateProject
}
function Firebase(props: Props) {
  const { project } = props
  const location = useLocation()
  const { authProviders } = project

  const isEnabled = useMemo(() => {
    const firebaseProvider = _.find(authProviders, (item) => item.key === 'firebase')
    return firebaseProvider?.is_enabled || false
  }, [authProviders])

  return (
    <div>
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
              <img src={icon} alt={'img'} />
              <Typography
                css={css`
                  font-weight: bold;
                  margin-left: 10px;
                `}
              >
                Firebase
              </Typography>
            </Grid>
          </div>

          <div>
            <Grid container alignItems={'center'} gap={'15px'}>
              <EnabledStatusIndicator isEnabled={isEnabled} />

              <Link to={`${location.pathname}/firebase`}>
                <FontAwesomeIcon
                  icon={faGear}
                  css={css`
                    color: ${colors.blue};
                    font-size: 22px;
                  `}
                />
              </Link>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Firebase
