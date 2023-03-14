import adminApi from '../../libs/userino-admin-api'
import { DispatcherResponse } from '../../typings/ReduxDispatch'
import { actions } from './reducer'

class Dispatch {
  getApp(id: string): DispatcherResponse {
    return async (dispatch) => {
      const app = await adminApi.getApp(id)
      if (app) {
        dispatch(actions.setApp(app))
      }
    }
  }

  getAppClients(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      const list = await adminApi.getAppClients(app_id)
      dispatch(actions.setAppClients({ app_id, list }))
    }
  }

  getAppAccessList(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      const list = await adminApi.getAppAccessList(app_id)
      dispatch(actions.setAppAccessList({ app_id, list }))
    }
  }

  createClient(app_id: string, params: { name: string }): DispatcherResponse {
    return async (dispatch) => {
      await adminApi.createAppClient(app_id, params)
      dispatch(this.getAppClients(app_id))
    }
  }

  addAccess(app_id: string, params: { name: string; public_key: string }): DispatcherResponse {
    return async (dispatch) => {
      await adminApi.createAppAccess(app_id, params)
      dispatch(this.getAppAccessList(app_id))
    }
  }

  getAuthProviders(app_id: string) {
    return async (dispatch) => {
      const list = await adminApi.getAppAuthProviders(app_id)
      dispatch(
        actions.setAuthProviders({
          app_id,
          list,
        }),
      )
    }
  }

  enableFirebaseApp(app_id: string) {
    return async (dispatch) => {
      await adminApi.enableFirebaseApp(app_id)
      await dispatch(this.getAuthProviders(app_id))
    }
  }

  disableFirebaseApp(app_id: string) {
    return async (dispatch) => {
      await adminApi.disableFirebaseApp(app_id)
      await dispatch(this.getAuthProviders(app_id))
    }
  }
}

const AppsDispatcher = new Dispatch()
export default AppsDispatcher
