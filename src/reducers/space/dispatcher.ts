import adminApi from '../../libs/userino-admin-api'
import { DispatcherResponse } from '../../typings/ReduxDispatch'
import { actions } from './reducer'

class Dispatch {
  getApps(): DispatcherResponse {
    return async (dispatch) => {
      const apps = await adminApi.getApps()
      dispatch(actions.setApps(apps))
    }
  }

  createApp(params: { name: string }): DispatcherResponse {
    return async (dispatch) => {
      const app = await adminApi.createApp(params)
      dispatch(this.getApps())
    }
  }
}

const SpaceDispatcher = new Dispatch()
export default SpaceDispatcher
