import _ from 'lodash'
import React, { ReactElement, ReactNode } from 'react'

interface Props<StatusesType> {
  statuses: StatusesType
  renderError?: (error: string) => ReactNode
  renderLoading?: () => ReactNode
  renderSuccess?: () => ReactNode
  render: (statuses: StatusesType) => ReactNode
  autoResetInMs?: number
}

function RendererActionSplit<
  StatusesType extends {
    isLoading?: boolean
    isDone?: boolean
    error?: string
  },
>(props: Props<StatusesType>): ReactElement | null {
  const { statuses, render, renderError, renderLoading, renderSuccess, autoResetInMs } = props
  const { isLoading, isDone, error } = statuses

  if (isLoading && renderLoading) {
    return <>{renderLoading()}</>
  }

  if (error && renderError) {
    return <>{renderError(error)}</>
  }

  if (isDone) {
    if (_.isFunction(renderSuccess)) return <>{renderSuccess()}</>
  }

  return <>{render(statuses)}</>
}

export default RendererActionSplit
