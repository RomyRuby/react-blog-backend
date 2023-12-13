import { useSelector, useDispatch } from "react-redux"
import handleNum from "@/store/NumStatus"

const View = () => {
  //获取仓库数据
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num
  }))
  //修改仓库权限
  const dispatch = useDispatch()
  const changeNum = () => {
    //调用同步方法
    dispatch({ type: "add2", val: 10 })
  }
  const changeNum2 = () => {
    //调用异步方法
    dispatch(handleNum.asyncActions.asyncAdd1)
  }
  return (
    <div className='page1'>
      <p>这是Page1</p>
      <p>博文统计</p>
      <p>博文分析</p>
      <p>博文记录</p>
      <p>{num}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>
    </div>
  )
}

export default View