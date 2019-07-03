## hexo-renderer-github

通过 GitHub API 渲染 Markdown。

**使用本插件需要发起网络请求，请确保网络正常！**


### Use

卸载其他同类型渲染插件，例如默认 marked

```
npm un hexo-renderer-marked --save
```

安装 hexo-renderer-github

```
npm install hexo-renderer-github --save
```


### Options

修改 Hexo 配置 _config.yml 添加 `githubRender` 属性。

githubRender.request 参照 [axios options](https://github.com/axios/axios#request-config)。

githubRender.markdown 参照 [GitHub API](https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document)。


```yml
githubRender:
    request:
        # axios options
    markdown:
        # GitHub API
```