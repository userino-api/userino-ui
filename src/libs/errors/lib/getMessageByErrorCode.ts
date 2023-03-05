// import l from '@reaction-localization/mobile'
// import companyErrorCodes from '../../../apps/employee/pages/joinCompany/const/errorCodes'
// import authErrorCodes from '../const/authErrorCodes'
// import errorCodes from '../const/errorCodes'
// import eventErrorCodes from '../const/eventErrorCodes'

import authErrorCodes from '../const/authErrorCodes'

export function getMessageByErrorCode(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-is-blocked':
      return 'Email is not allowed'

    case authErrorCodes.accountAlreadyExists:
      return "Account already exists. Seems you've finished onboard. Try to login by this link: https://hr.reaction-club.app"

    default:
      break
  }

  return errorCode
}

export default getMessageByErrorCode
