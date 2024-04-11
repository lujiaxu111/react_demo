import { Outlet } from "react-router-dom"  
import {useNavigate} from 'react-router-dom'
const Layout = ()=>{
  const navigate = useNavigate()
  return (
    <div>我是一级路由组件
      <button onClick={()=>navigate('/')}>去面板</button>
      <button onClick={()=>navigate('/about?id=1001&name=xxx')}>去关于</button>
       <Outlet />
    </div>
  )
}
export default Layout