import { AxiosError } from 'axios'
import getFormattedApiErrorForStatus from './lib/getFormattedApiErrorForStatus'
import getMessageByErrorCode from './lib/getMessageByErrorCode'

export function getErrorCodeFromApi(e: AxiosError): string | undefined {
  const { data } = getRequestInfo(e)
  const { errorCode } = data || {}

  return errorCode as string | undefined
}

export function getRequestInfo(e: AxiosError): {
  status: number | undefined
  data: Record<string, any>
} {
  const { status, data = {} } = e.response || {}

  return { status, data: data as Record<string, any> }
}

export function getFormattedApiError(e: AxiosError): string {
  let errorMessage = e.message
  const { data, status } = getRequestInfo(e)
  const { customMessage, errorCode }: { customMessage?: string; errorCode?: string } = data || {}

  if (status) {
    const statusError = getFormattedApiErrorForStatus(status)
    if (statusError) {
      errorMessage = statusError
    }
  }

  if (customMessage) return customMessage
  if (errorCode) {
    const errorCodeMessage = getMessageByErrorCode(errorCode)
    errorMessage = errorCodeMessage || errorCode
  }

  return errorMessage
}

export default {
  getRequestInfo,
  getFormattedApiError,
  getErrorCodeFromApi,
  getMessageByErrorCode,
}
