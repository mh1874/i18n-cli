# @thinghoo-cli/i18n

```shell
# 低版本存在不可用的情况, 请下载最新版本
npm i -g @thinghoo-cli/i18n
```

## 初始化翻译平台 appId 和 key

```shell
th set translate account.appId xxx
th set translate account.key xxx
```

## 在哪里可以创建 appId 和 key

> 请使用前仔细阅读百度翻译开发平台相关规则

[百度翻译开放平台](https://fanyi-api.baidu.com/api/trans/product/desktop)

1. 注册
2. 实名认证
   1. 标准版 qbs 1 每月 5 万字符
   2. 高级版 qbs 10 每月 100 万字符
3. 开通通用文本翻译功能
4. 生成 appId 和 key
5. 本插件目前仅支持高级版

## 翻译单个文件

```shell
th translate -f ./yourfile.js
# 会在同级目录下生成 yourfile-en.js
```

如 test.js

```js
export default {
  isok: '早早下班',
  common: {
    listTitle: '标题',
    addTitle: '测试',
  },
  test: {
    a: {
      b: {
        c: '哈哈哈',
      },
    },
    aaa: {
      value: '输入',
    },
  },
};
```

输出文件为 test-en.js, 内容如下

```js
export default {
  isok: 'Leave work early',
  common: {
    listTitle: 'title',
    addTitle: 'test',
  },
  test: {
    a: {
      b: {
        c: 'Hahaha',
      },
    },
    aaa: {
      value: 'input',
    },
  },
};
```

## 批量翻译

> 检索目标文件夹内 zh-CN 文件夹下的所有文件, 翻译成功后输出至其同级的 en-US 文件夹下, 文件名同名。（注：目前文件夹名需指定为`zh-CN`）

```shell
th translate -d ./demo
```

如: demo 文件夹是以下结构, zh-CN 文件夹中所有 JS 会翻译后输出至 en-US 文件夹

每个文件输出内容同翻译单个文件

```bash
.
├── en-US
│   ├── test.js
│   ├── test2.js
│   └── test3.js
├── test-en.js
├── test.js
└── zh-CN
    ├── test.js
    ├── test2.js
    └── test3.js


```
