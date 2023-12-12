import {useSelector} from "react-redux"

const Page1 = () => {
  //获取仓库数据
  const {num} = useSelector((state)=>({
    num:state.num
  }))
  return (
    <div className='page1'>
      <p>这是Page1</p>
      <p>{num}</p>
    </div>
  )
}

export default Page1