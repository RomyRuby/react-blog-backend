// 就是来管理数据的
import handleMenu from "./index"
const defaultState = {
  ...handleMenu.state
}
const reducer = (state = defaultState,action:{type:string,val:number})=>{
    //调用useDispatch会执行这段代码
    const newState =  JSON.parse(JSON.stringify(state))

    for(const key in handleMenu.actionNames){
        if(action.type===handleMenu.actionNames[key]){
            handleMenu.actions[handleMenu.actionNames[key]](newState,action)
            break;
        }
    }
    return newState
}

export default reducer