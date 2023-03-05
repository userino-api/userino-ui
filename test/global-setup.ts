process.env.NODE_ENV = 'test'
process.env.TZ = 'UTC'

module.exports = async function (globalConfig, projectConfig) {
  console.log(globalConfig.testPathPattern)
  console.log(projectConfig)

  // Set reference to mongod in order to close the server during teardown.
  // globalThis.__MONGOD__ = mongod;
}
