import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Product (params) {
  // 执行useNavigate 得到跳转函数
  const navigate = useNavigate();
  function goAbout(params) {
    // 调用跳转函数传入目标路径
    // navigate('/about', {replace: true });
    // 传参数-1：searchParams 传参
    // navigate('/about?id=1001');

    // 传参数-2：params 传参
    navigate('/about/1001');
  }
  return (
      <div>
        Product
        <button onClick={goAbout}>click me!</button>
      </div>
  )
}

