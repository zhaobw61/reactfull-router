import React from "react";
import { HashRouter, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Product from './view/Product';
import Layout from "./view/Layout";
import NotFound from "./view/NotFound";
function App() {
  return (
    <div className="App">
      {/* 声明当前要使用一个非hash模式的路由 */}
      <HashRouter>
      {/* 指定跳转的地址 to用来配置路由地址 */}
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        {/* 路由出口 路由对应的组件会在这里进行渲染 */}
        <Routes>
          {/* 指定路径和组件的对应关系 path代表路径  element代表组件  */}
          <Route path="/home" element={<Home/>}>
            {/* 默认二级 添加index属性 要把自己的path删除 */}
            {/* <Route index element={<Layout/>}></Route> */}
            <Route path="layout" element={<Layout/>}></Route>
          </Route>
          <Route path="/about/:id" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          {/* 404 路由匹配 */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
