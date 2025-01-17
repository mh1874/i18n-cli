# zzoffduty-cli

```shell
# 低版本存在不可用的情况, 请下载最新版本
npm i -g zzoffduty-cli
```

## 初始化翻译平台appId和key

```shell
zz set translate account.appId xxx
zz set translate account.key xxx
```

## 在哪里可以创建appId和key

> 请使用前仔细阅读百度翻译开发平台相关规则

[百度翻译开放平台](https://fanyi-api.baidu.com/api/trans/product/desktop)

1. 注册
2. 实名认证
   1. 标准版 qbs 1  每月5万字符
   2. 高级版 qbs 10 每月100万字符
3. 开通通用文本翻译功能
4. 生成appId和key
5. 本插件目前仅支持高级版

## 翻译单个文件

```shell
zz translate -f ./yourfile.js
# 会在同级目录下生成 yourfile-en.js
```
如test.js
```js
export default {
    isok: '早早下班',
    common: {
        listTitle: '标题',
        addTitle: '测试'
    },
    test: {
        a: {
            b: {
                c: '哈哈哈'
            }
        },
        aaa: {
            value: '输入'
        }
    }
}
```
输出文件为test-en.js, 内容如下
```js
export default {
    isok: "Leave work early",
    common: {
        listTitle: "title",
        addTitle: "test"
    },
    test: {
        a: {
            b: {
                c: "Hahaha"
            }
        },
        aaa: {
            value: "input"
        }
    }
}
```
## 批量翻译

> 检索目标文件夹内所有langs文件夹下的zh-CN 文件夹下的所有文件, 输出至其同级的en-US下, 文件名同名

```shell
zz translate -d ./demo
```
如: demo文件夹是以下结构, zh-CN中所有JS会翻译后输出至en-US

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

## 免责声明

任何用户在使用 zzoffduty-cli 前，请您仔细阅读并透彻理解本声明。您可以选择不使用 zzoffduty-cli ，若您一旦使用 zzoffduty-cli ，您的使用行为即被视为对本声明全部内容的认可和接受。

1. 任何单位或个人因下载使用 zzoffduty-cli 而产生的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其造成的损失 (包括但不限于直接、间接、附带或衍生的损失等)，本人不承担任何法律责任。

2. 任何单位或个人不得在未经本团队书面授权的情况下对 zzoffduty-cli 开源界面框架本身申请相关的知识产权。

3. 如果本声明的任何部分被认为无效或不可执行，则该部分将被解释为反映本人的初衷，其余部分仍具有完全效力。不可执行的部分声明，并不构成我放弃执行该声明的权利。

