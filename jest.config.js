/* eslint-disable import/no-commonjs */

module.exports = {
  rootDir: '.',
  testMatch: ['**/?*.test.ts(x)'],
  testEnvironment: 'jsdom',
  // preset: 'babel-jest',
  transform: {
    // '^.+\\.jsx?$': './src/test/babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  globalSetup: './test/global-setup.ts',
  transformIgnorePatterns: ['/node_modules/(?!@)/'],
  setupFilesAfterEnv: ['./test/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styleMock.js',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/test/mocks/imageMock.js',
  },
  snapshotSerializers: ['@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */],
}
