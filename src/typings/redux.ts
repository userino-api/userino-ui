interface ReduxAction<T = any> {
  type: string
  payload?: T
}

interface DispatcherOptions {
  isForce?: boolean
}

interface StoreUpdatedObject {
  storeUpdatedAt: StoreUpdatedAt
}

type StoreUpdatedAt = undefined | number | null
