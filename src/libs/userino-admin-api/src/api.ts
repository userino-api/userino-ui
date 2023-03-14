import { App, AppAccess, AppClient } from '../../../typings/core'
import apiClient from '../../api/apiClient'

const adminApi = {
  async getApps() {
    const { data } = await apiClient.get('/app/list')
    return data
  },

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

  async getAppAuthProviders(app_id: string): Promise<any> {
    const { data } = await apiClient.get(`/app/${app_id}/auth/list`)
    return data
  },

  async enableFirebaseApp(app_id: string): Promise<any> {
    const { data } = await apiClient.post(`/firebase/app/${app_id}/enable`)
    return data
  },

  async disableFirebaseApp(app_id: string): Promise<any> {
    const { data } = await apiClient.post(`/firebase/app/${app_id}/disable`)
    return data
  },

  async getConfigFile(app_id: string): Promise<any> {
    const { data } = await apiClient.get(`/firebase/app/${app_id}/config`)
    return data
  },

  async saveConfigFile(app_id: string, body: { fileRaw: Record<string, any> | string }): Promise<any> {
    const { data } = await apiClient.post(`/firebase/app/${app_id}/config`, body)
    return data
  },
}

export default adminApi
