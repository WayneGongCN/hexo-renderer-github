const axiosInstance = require('./axios')(axiosOptions)

module.exports = (axiosOptions, githubApiParams) => (data, options) {
  const params = {
    text: data.text,
    ...githubApiParams
  }
  return axiosInstance
    .post('/markdown', params)
    .then(res => res.data)
}
