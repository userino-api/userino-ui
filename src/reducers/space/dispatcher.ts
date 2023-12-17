import { DispatcherResponse } from '../../typings/ReduxDispatch'
import projectsApi from '../projects/api'
import { actions } from './reducer'

class Dispatch {
  getProjects(): DispatcherResponse {
    return async (dispatch) => {
      const list = await projectsApi.getProjects()
      dispatch(actions.setProjects(list))
    }
  }
}

const SpaceDispatcher = new Dispatch()
export default SpaceDispatcher
