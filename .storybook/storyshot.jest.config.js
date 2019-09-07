const path = require('path')
const globalJestConfig = require('../jest.config')

const finalJestConfig = {...globalJestConfig}

finalJestConfig.rootDir = path.join(__dirname, '../')
finalJestConfig.testMatch = [
  '<rootDir>/.storybook/storyshot-runner.js',
]
finalJestConfig.testEnvironment = 'jsdom'

module.exports = finalJestConfig
