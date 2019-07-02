let axiosInstance = null

module.exports = function (data, options) {
  const { request, markdown } = this.config.githubRender || {}
  if (!axiosInstance) {
    axiosInstance = require('./axios')(request)
  }

  const params = {
    text: data.text,
    ...markdown
  }
  return axiosInstance
    .post('/markdown', params)
    .then(res => res.data)
}
