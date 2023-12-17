import { App, AppAccess, AppClient } from '../../../typings/core'
import apiClient from '../../api/apiClient'

const adminApi = {
  async getApp(id: string): Promise<App> {
    const { data } = await apiClient.get(`/app/${id}`)
    return data
  },

  async getAppClients(app_id: string): Promise<AppClient[]> {
    const { data } = await apiClient.get(`/app/${app_id}/client/list`)
    return data
  },

  async getAppAccessList(app_id: string): Promise<AppAccess[]> {
    const { data } = await apiClient.get(`/app/${app_id}/access/list`)
    return data
  },

  async createApp(params: { name: string }): Promise<any> {
    const { data } = await apiClient.post(`/app/create`, params)
    return data
  },

  async createAppClient(app_id: string, params: { name: string }): Promise<any> {
    const { data } = await apiClient.post(`/app/${app_id}/client/create`, params)
    return data
  },

  async createAppAccess(app_id: string, params: { name: string; public_key: string }): Promise<any> {
    const { data } = await apiClient.post(`/app/${app_id}/access/add`, params)
    return data
  },

}

export default adminApi
