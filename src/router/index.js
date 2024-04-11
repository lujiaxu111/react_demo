import Login from '../pages/Login'
import Article from '../pages/Article'
import Demo from '../pages/Demo'
import {  createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
  {
  path:'/login',
  element:<Login></Login>
},
  {
  path:'/article',
  element:<Article></Article>
},
  {
  path:'/demo',
  element:<Demo></Demo>
},
])
export default router