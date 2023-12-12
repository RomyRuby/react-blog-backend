import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"//清楚浏览器默认样式，初始化的东西放前面
//全局样式
import "@/assets/styles/global.scss"


import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
