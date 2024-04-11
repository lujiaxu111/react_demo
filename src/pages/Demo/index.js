import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Input } from 'antd';
import {inscrement,decrement,fetchOpenter} from '../../store/modules/counterStore'
export default function  Demo(){
  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch()
 return (
  <div>
    <button onClick={()=> dispatch(inscrement(20))}>++</button>
    <button onClick={()=> dispatch(decrement(10))}>--</button>
    <button onClick={()=> dispatch(fetchOpenter())}>异步操作</button>
    <div>
      <Input style={{width:"10%"}} value={count}  placeholder="Basic usage" />
    </div>
  </div>
 )
}
