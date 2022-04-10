import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function About() {
  // 取参数-1 searchParams 传参下的取参数
  // let [params] = useSearchParams();
  // let id = params.get('id');
  // console.log('params',params);

  // 取参数-2 params 传参下的取参数
  let params = useParams();
  let id = params.id;
  return (
    <div>About 得到的参数{id}</div>
  )
}
