// import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"//清楚浏览器默认样式，初始化的东西放前面
//全局样式
import "@/assets/styles/global.scss"


import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
