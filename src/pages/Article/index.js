import { useSearchParams } from 'react-router-dom'
const Article = ()=>{
  let [params] = useSearchParams()
  let id = params.get('id')
  let name = params.get('name')
  return <>
    <div>我是文章哦
      <span>我是useSearchParams传参{id}{name}</span>
    </div>
  </>
}
export default Article