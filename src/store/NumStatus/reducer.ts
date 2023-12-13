// 就是来管理数据的
import handleNum from "./index"
const defaultState = {
  ...handleNum.state
}
const reducer = (state = defaultState,action:{type:string,val:number})=>{
    //调用useDispatch会执行这段代码
    const newState =  JSON.parse(JSON.stringify(state))

    for(const key in handleNum.actionNames){
        if(action.type===handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]](newState,action)
            break;
        }
    }
    return newState
}

export default reducer