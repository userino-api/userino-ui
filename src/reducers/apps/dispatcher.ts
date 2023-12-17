import { DispatcherResponse } from '../../typings/ReduxDispatch'
import api from './api'
import { actions } from './reducer'

class Dispatch {
  getApp(id: string): DispatcherResponse {
    return async (dispatch) => {
      const app = await api.getApp(id)
      if (app) {
        dispatch(actions.setApp(app))
      }
    }
  }

  getAppClients(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      const list = await api.getAppClients(app_id)
      dispatch(actions.setAppClients({ app_id, list }))
    }
  }

  createClient(app_id: string): DispatcherResponse {
    return async (dispatch) => {
      await api.createAppClient(app_id)
      dispatch(this.getAppClients(app_id))
    }
  }
}

const AppDispatcher = new Dispatch()
export default AppDispatcher
