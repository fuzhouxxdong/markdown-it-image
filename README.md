# hexo markdown 图片插件自用

### 安装markdown-it

```
npm un hexo-renderer-marked --save
npm i hexo-renderer-markdown-it --save
```

### 安装markdown-it-image插件

```
npm install markdown-it-image --save

```

### 配置hexo _config.yml文件
```
markdown:
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
  plugins:
    - markdown-it-abbr
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
    - markdown-it-emoji
    - markdown-it-image #用image插件
  anchors:
    level: 2
    collisionSuffix: 'v'
    # If `true`, creates an anchor tag with a permalink besides the heading.
    permalink: false
    permalinkClass: header-anchor
    # The symbol used to make the permalink
    permalinkSymbol: ¶
```

### 在md中使用

```
@[testt](https://raw.githubusercontent.com/diycat/img/master/1111111.jpg)
```
图片链接是通过[diycat](diycat.github.io)生成,效果请看[schmaltzy](https://schmaltzy.me/2019/04/10/handwritten-and-hand-drawn/)

### License

MIT
