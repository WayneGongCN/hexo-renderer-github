const axios = require('axios')

module.exports = function (options = {}) {
  const defaultOptions = {
    baseURL: 'https://api.github.com',
    timeout: 10 * 1000
  }

  return axios.create({
    ...options,
    ...defaultOptions
  })
}
