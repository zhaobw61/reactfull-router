import React, { Component } from 'react';
import store from '../../store'
import {sendAction} from '../../action'

export default class Home extends Component {
  handleClick = () => {
    store.dispatch(sendAction());
  }
  componentDidMount() {
    let a = store.subscribe(() => {
      console.log('subscribe', store.getState());
      this.setState(store.getState())
    });
    console.log('a',a);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        <div>{store.getState().value}</div>
      </div>
    )
  }
}
