import React, { ReactElement } from 'react'
import { ErrorMessageProvider } from 'react-hooks-use-error'
import apiErrorUtil from './errors/apiErrorUtil'

export interface Props {
  children: ReactElement
}

const getErrorMessage = (e) => {
  const errorMessage = apiErrorUtil.getFormattedApiError(e)

  return errorMessage
}

export default function ErrorMessageProviderWrapper(props: Props) {
  const { children } = props

  return <ErrorMessageProvider getErrorMessage={getErrorMessage}>{children}</ErrorMessageProvider>
}
