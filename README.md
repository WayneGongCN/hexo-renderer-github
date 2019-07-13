## hexo-renderer-github

通过 GitHub API 渲染 Markdown。

**GitHub API 在未认证模式下存在调用的限制，当文章数量较多时请申请 [Access token](https://github.com/settings/tokens/new?scopes=repo&description=hexo-renderer-github) 并填入站点配置项!**

**使用本插件需要发起网络请求，请确保网络正常！**


### Use

卸载其他同类型渲染插件:

```
npm un hexo-renderer-marked --save
```

安装 `hexo-renderer-github` :

```
npm install hexo-renderer-github --save
```


### Options

修改 Hexo 配置 _config.yml 添加 `githubRender` 属性。

基本配置：

```yml
githubRender:
  request: # axios options
    Authorization: token $YOUR_ACCESS_TOKEN

  markdown: # API params
    mode: gfm
```

githubRender.request 更多配置请参照 [axios options](https://github.com/axios/axios#request-config)。

githubRender.markdown 更多参数请参照 [GitHub API](https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document)。

