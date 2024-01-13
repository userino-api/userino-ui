import apiClient from '../../../libs/api/apiClient'

export default {
  async enableFirebaseApp(app_id: string): Promise<any> {
    const { data } = await apiClient.post(`/firebase/project/${app_id}/enable`)
    return data
  },

  async disableFirebaseApp(app_id: string): Promise<any> {
    const { data } = await apiClient.post(`/firebase/project/${app_id}/disable`)
    return data
  },

  async getConfigFile(app_id: string): Promise<any> {
    const { data } = await apiClient.get(`/firebase/project/${app_id}/config`)
    return data
  },

  async saveConfigFile(app_id: string, body: { fileRaw: Record<string, any> | string }): Promise<any> {
    const { data } = await apiClient.post(`/firebase/project/${app_id}/config`, body)
    return data
  },
}
