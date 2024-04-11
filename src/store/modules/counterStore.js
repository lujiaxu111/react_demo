import {createSlice} from '@reduxjs/toolkit'
const counterStore = createSlice({
  name:"counter",
  //初始化state
  initialState:{
    count:0
  },
  //修改状态的方法 同步方法 支持直接修改
  reducers:{
    inscrement(state,action){
      state.count = action.payload
    },
    decrement(state,action){
      state.count = action.payload
    }
  }
})
//解构actionCreater函数
const { inscrement,decrement }  = counterStore.actions
// 异步请求
const fetchOpenter = ()=>{
  return async (dispatch)=>{
    // let res = await axios.xxx
    dispatch(inscrement(30))
  }
}
//获取reducer
const reducer = counterStore.reducer
export {inscrement,decrement,fetchOpenter}
export default reducer