import apiClient from '../../../libs/api/apiClient'

export default {
  async getConfigFile(project_id: string): Promise<any> {
    const { data } = await apiClient.get(`/media/project/${project_id}/config`)
    return data
  },

  async saveConfigFile(project_id: string, body: { client_id: string; client_secret: string }): Promise<any> {
    const { data } = await apiClient.post(`/media/project/${project_id}/config`, body)
    return data
  },
}
