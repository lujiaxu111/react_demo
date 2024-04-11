import {useNavigate} from 'react-router-dom'
const Login = ()=>{
  const navigate = useNavigate()
  return <>
    <div>我是登录哦</div>
    <button onClick={()=>navigate('/article?id=1001&name=xxx')}>searchParams传参</button>
  </>
}
export default Login