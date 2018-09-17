# 使用 React 重写 kede mobile 培训课件
# 项目初始化：
## 使用 create-react-app 创建项目
```shell
create-react-app kede.m
```

## 删除多余的文件：
如：
- src/registerServiceWorker.js
- src/logo.svg
- src/index.css
- src/App.test.js
  删除这些文件，需要调整 src/App.css 以及 src/index.js 对这些文件的引用

## 创建开发所需文件夹
在src文件夹中创建 components 文件夹，所有的组件均建立在该文件夹下

# 使用 styled-components 全局注入 normalize.css
## 安装 styled-components：
```node
npm install --save styled-components
```
## 创建 src/style.js文件
使用 {injectGlobal} from 'styled-components'进行全局样式的注入
*推荐使用 normalize.css?v=7.0.0 版本*
```javascript
injectGlobal`
    /*normalize.css*/
`
```
## 在 src/index.js 中引入上面的style.js
```javascript
import './style.js';
```

# header 组件布局
路径：src/components/header

新增文件：

- index.js：用于页面布局。
- style.js：页面样式，使用"styled-components"模块进行布局处理。


# bottom 组件布局
路径：src/components/bottom

新增文件：

- index.js：用于页面布局
- style.js：页面样式，使用"styled-components"模块进行布局处理。


# 使用 react-router-dom 进行页面路由
>文档：https://reacttraining.com/react-router/web/guides/basic-components
## 安装：
```javascript
npm install --save react-router-dom
```

## 使用：
App.js
```javascript
import { BrowserRouter, Route } from 'react-router-dom';
...
<BrowserRouter>
  <Route /> 
</BrowserRouter>
```
> 需要注意，Route标签需要有一个根节点
> 
> Route所用与的属性：path，exact，render，component等。


## 页面使用：
通过 \<Link\>标签进行路由跳转
> Link所用与的属性：to。

# 搜搜页面
