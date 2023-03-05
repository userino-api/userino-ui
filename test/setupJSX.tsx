import React from 'react'

jest.mock('@mui/material/TextField', () => (props) => <input {...props} />)
