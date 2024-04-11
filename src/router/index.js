import Login from '../pages/Login'
import Board from '../pages/Board'
import About from '../pages/About'
import Demo from '../pages/Demo'
import Layout from '../pages/Layout'
import {  createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
  {
  path:'/login',
  element:<Login></Login>
},
  {
  path:'/demo',
  element:<Demo></Demo>
},
  {
  path:'/',
  element:<Layout></Layout>,
  children:[
    {
      index:true,
      element:<Board></Board>
    },
      {
      path:'about',
      element:<About></About>
    },
  ]
},

])
export default router