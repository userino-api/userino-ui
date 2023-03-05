import { ThunkDispatch } from 'redux-thunk'
import { ReduxState } from '../reducers'

type ReduxDispatch = ThunkDispatch<ReduxState, any, ReduxAction>

type DispatcherResponseCreate<State extends {} = any, Response = any> = (
  dispatch: ReduxDispatch<State>,
  getState: () => State,
) => Promise<Response>

// type DispatcherResponse<T = any> = (dispatch: ReduxDispatch, getState: () => ReduxState) => Promise<T>
type DispatcherResponse<Response = any> = DispatcherResponseCreate<ReduxState, Response>
