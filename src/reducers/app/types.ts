import keyManager from 'constant-manager'

const appTypes = keyManager(
  {
    RESET: '',
  },
  {
    prefix: 'APP@',
  },
)

export default appTypes
