let axiosInstance = null

module.exports = function (axiosOptions, githubApiParams) {
  axiosInstance = require('./axios')(axiosOptions)

  return function (data, options) {
    const params = {
      text: data.text,
      ...githubApiParams
    }
    return axiosInstance
      .post('/markdown', params)
      .then(res => res.data)
  }
}
