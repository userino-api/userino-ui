import AppsDispatcher from '@reducers/apps/dispatcher'
import ProjectDispatcher from '@reducers/projects/dispatcher'
import { useAsyncFetch } from 'react-hooks-async-handlers'
import { useAppDispatch } from '../../../libs/redux'

function useFetchAuthProviders(app_id: string) {
  const dispatch = useAppDispatch()
  const fetchAuthProviders = useAsyncFetch(async () => {
    await dispatch(ProjectDispatcher.getAuthProviders(app_id))
  }, [app_id])

  return fetchAuthProviders
}

export default useFetchAuthProviders
