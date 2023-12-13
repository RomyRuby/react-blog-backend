const store =  {
  state:{
    num:20
  },
  actions:{
    //同步方法
    add1(newState:{num:number}){
      newState.num++
    },
    add2(newState:{num:number},action:{type:string,val:number}){
      newState.num+=action.val
    }
  },
  asyncActions:{
    // 异步方法
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncAdd1(dispath:Function){
      setTimeout(()=>{
        dispath({type:"add1"})
      })
    }
  },
  actionNames:{}
}

//统一管理名字
const actionNames ={}
for(const key in store.actions){
  actionNames[key] = key
}
store.actionNames = actionNames

export default store