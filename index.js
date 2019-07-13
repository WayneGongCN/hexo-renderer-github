const renderer = require('./lib/renderer')
const { request, markdown } = hexo.config.githubRender || {}

// default axios options
const defaultAxiosOptions = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    ...request && request.headers
  },
  ...request
}

// default api params
const defaultGithubApiParams = {
  mode: 'gfm',
  ...markdown
}


hexo.extend.renderer.register('md', 'html', renderer(defaultAxiosOptions, defaultGithubApiParams))
