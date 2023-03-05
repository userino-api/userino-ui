/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Grid } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import NetworkConnect from '../NetworkConnect'

const pages = [
  {
    label: 'Home',
    href: '/',
  },
  // {
  //   label: 'Token',
  //   href: '/token',
  // },
]

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      css={css`
        background-color: #3c3e58;
        color: #fff;
      `}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} /> */}
          <div
            css={css`
              margin-right: 2rem;
              position: relative;
            `}
          >
            <Grid container alignItems={'center'}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                css={css`
                  color: #fff;
                  margin-right: 5px;
                `}
                sx={{
                  display: { xs: 'flex' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Userino
              </Typography>
            </Grid>

            {/* <Typography */}
            {/*  css={css` */}
            {/*    color: #fff; */}
            {/*    font-size: 10px; */}
            {/*    position: absolute; */}
            {/*    top: 100%; */}
            {/*    left: 0; */}
            {/*  `} */}
            {/* > */}
            {/*  v{config.version} */}
            {/* </Typography> */}
          </div>

          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {pages.map(({ label, href }) => (
              <Box sx={{ padding: '10px', margin: '0 20px' }} key={`menu-${label}`}>
                <Link to={href}>{label}</Link>
              </Box>
            ))}
          </Box>

          <div
            css={css`
              align-self: stretch;
            `}
          >
            {/*<Grid*/}
            {/*  container*/}
            {/*  alignItems={'center'}*/}
            {/*  css={css`*/}
            {/*    height: 100%;*/}
            {/*    margin-right: 50px;*/}
            {/*  `}*/}
            {/*>*/}
            {/*  <NetworkConnect />*/}
            {/*</Grid>*/}
          </div>
          {/* <Box sx={{ flexGrow: 0 }}> */}
          {/*  <Tooltip title="Open settings"> */}
          {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} size="large"> */}
          {/*      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
          {/*    </IconButton> */}
          {/*  </Tooltip> */}
          {/*  <Menu */}
          {/*    sx={{ mt: '45px' }} */}
          {/*    id="menu-appbar" */}
          {/*    anchorEl={anchorElUser} */}
          {/*    anchorOrigin={{ */}
          {/*      vertical: 'top', */}
          {/*      horizontal: 'right', */}
          {/*    }} */}
          {/*    keepMounted */}
          {/*    transformOrigin={{ */}
          {/*      vertical: 'top', */}
          {/*      horizontal: 'right', */}
          {/*    }} */}
          {/*    open={Boolean(anchorElUser)} */}
          {/*    onClose={handleCloseUserMenu} */}
          {/*  > */}
          {/*    {settings.map((setting) => ( */}
          {/*      <MenuItem key={setting} onClick={handleCloseUserMenu}> */}
          {/*        <Typography textAlign="center">{setting}</Typography> */}
          {/*      </MenuItem> */}
          {/*    ))} */}
          {/*  </Menu> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
