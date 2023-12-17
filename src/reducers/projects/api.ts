import apiClient from '../../libs/api/apiClient'

export default {
  async getProjects() {
    const { data } = await apiClient.get('/project/list')
    return data
  },
  async getApps(project_id: string) {
    const { data } = await apiClient.get(`/project/${project_id}/apps`)
    return data
  },

  async getProject(project_id: string) {
    const { data } = await apiClient.get(`/project/${project_id}`)
    return data
  },

  async createProject(params: { name: string }): Promise<any> {
    const { data } = await apiClient.post(`/project/create`, params)
    return data
  },

  async getAuthProviders(project_id: string): Promise<any> {
    const { data } = await apiClient.get(`/project/${project_id}/auth/list`)
    return data
  },
}
