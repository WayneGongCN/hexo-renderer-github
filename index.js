const renderer = require('./lib/renderer')

hexo.extend.renderer.register('md', 'html', renderer)
