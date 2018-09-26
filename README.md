# 使用 React 重写 kede mobile 培训课件
# 项目初始化：
## 使用 create-react-app 创建项目
```shell
create-react-app kede.m
```

## 删除多余的文件：
如：
- src/registerServiceWorker.js
  - 能够允许你在第一次访问成功之后，本地会有完整的缓存（相当于把网页当成App了）。第二次再访问的时候，就算断网了，依然可以打开页面
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
> Link所用到的属性：to。

# redux 

## 为什么要用redux？
react的数据传递是单向的：

![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180925105021714-34921900.gif)
>通过props属性进行数据的传递


非父子组件之间共享 state

![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180925105319011-1739129400.gif)


使用redux之后：数据传递不再是单向、线性的，所有组件的数据都会放到 Store 中，直接下放到对应需要更新的组件中。

![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180925105428122-702281697.gif)

## redux 介绍：
redux= reducer + flux
redux是一个数据层框架。其设计理念：所有的数据放在 store 里管理,一个组件改变了store中的内容,其他组件就会感知到store的这个变化,从而直接从store中获取数据来进行更新。

## redux 工作流：
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180925141104597-2088633436.png)

## 使用 react-redux来简化
项目地址：https://github.com/reduxjs/react-redux
### 使用步骤：
1. 安装
```shell
npm install --save react-redux
```
2. 在项目根目录下创建store文件夹，并在其内创建reducer.js，index.jS
   
![](https://img2018.cnblogs.com/blog/1101407/201809/1101407-20180926160444487-702449478.png)

/store/reducer.js
```javascript
import {fromJS} from 'immutable';

const defaultState = {
    showHeader:true,
    showFooter:true
}

export default (state = defaultState, action)=>{
    return state;
}
```

/store/index.js
```javascript
import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
export default store;
```

3. 在入口文件中引入 Provider组件，作为顶层App的分发点，在相关的页面组件中使用connect进行组件跟redux的store进行连接。
/index.js
```javascript
import { Provider } from 'react-redux';
import store from './store/index.js';
const container = (
    <Provider store={store}>
        <Wrapper><App /></Wrapper>
    </Provider>
)
ReactDOM.render(container, document.getElementById('root'));
```
components/自定义组件/index.js
```javascript
import {connect} from 'react-redux';
...
class Header extends Component {
    render() {
        ...
    }
}
...
export default connect(null,null)(Header);
```

# 重构Header，将store放到组件自身内部中
## 操作步骤：
1. 在Header组件文件夹中，创建store文件夹，并在其内创建 index.js，reducer.js，actionCreators.js，actionTypes.js等
2. 调整根目录/store/reducer.js
```javascript
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../components/header/store';
export default combineReducers({
    header: headerReducer
});
```

# 搜索页面
