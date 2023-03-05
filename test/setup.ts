import dotenv from 'dotenv'
import moment from 'moment-timezone'
import './setupJSX'

// moment.tz.setDefault('Europe/Kiev')
dotenv.config()

jest.mock('../src/libs/bugSnag')
// jest.mock('@material-ui/core/Modal', () => ({ children }) => children)
// jest.mock('@material-ui/core/MenuList', () => ({ children }) => children)
