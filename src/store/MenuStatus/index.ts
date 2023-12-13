const store =  {
  state:{
    currentMenu:null
  },
  actions:{
    //同步方法
    handleClickMenu(newState:{currentMenu:object},value:object){
      newState.currentMenu = value
    }
  },
  asyncActions:{
    // 异步方法
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