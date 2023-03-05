import axios from 'axios'
import config from '../../config'
import store from '../../store'

const instance = axios.create({
  baseURL: config.api_url,
  timeout: config.timeout,
})

patchMethod('get')
patchMethod('post')
patchMethod('delete')

export default instance

function patchMethod(methodName) {
  const originName = `${methodName}Original`
  instance[originName] = instance[methodName]
  instance[methodName] = async (...args) => {
    try {
      return await instance[originName](...args)
    } catch (e) {
      const logArgs = ['[ERROR] API']
      if (e.response) {
        const { status, data } = e.response
        if (status === 401) {
          // logOut()
        }
        logArgs.push(status)
        logArgs.push(data)
      } else logArgs.push(e.message)
      console.log(...logArgs)
      throw e
    }
  }
}

// todo tmp method for logout
// function logOut() {
//   // @ts-ignore
//   store.dispatch(AuthDispatcher.logout())
// }
