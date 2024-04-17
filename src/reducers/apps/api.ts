import apiClient from '../../libs/api/apiClient'
import { App } from '../../typings/core'

export default {
  async getApp(id: string): Promise<App> {
    const { data } = await apiClient.get(`/app/${id}`)
    return data
  },

  async getAppClients(app_id: string) {
    const { data } = await apiClient.get(`/app/${app_id}/app-client/list`)
    return data
  },
  async createAppClient(app_id: string) {
    const { data } = await apiClient.post(`/app/${app_id}/app-client/create`)
    return data
  },
  async getUsers(app_id: string) {
    const { data } = await apiClient.get(`/app/${app_id}/users`)
    return data
  },
}
