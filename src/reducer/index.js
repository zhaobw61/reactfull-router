// 创建reducer 函数， 专门用来处理发送过来的action

const initState = {
  value: '默认值'
}

const reducer = (state = initState, action) => {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case 'send_type':
      console.log('Object.assign({}, state, action)', Object.assign({}, state, action));
      return Object.assign({}, state, action);
    default:
      return state;
  }
}

module.exports = {
  reducer
}
