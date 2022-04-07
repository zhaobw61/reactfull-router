import { createStore } from "redux";
import { reducer } from '../reducer'

// 构建store

const store = createStore(reducer);

export default store;
