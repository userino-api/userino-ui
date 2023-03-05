import keyManager from 'constant-manager'

const authErrorCodes = keyManager(
  {
    accountAlreadyExists: 'account-already-exists',
    emailBlocked: 'email-is-blocked',
    codeIsInvalid: 'code-is-invalid',
    phoneIsBoundToDifferentAccount: 'phone-is-bound-outside',
  },
  {
    prefix: 'auth/',
  },
)

export default authErrorCodes
