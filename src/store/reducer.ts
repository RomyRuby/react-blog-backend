const defaultState = {
    num:20
}
const reducer = (state = defaultState)=>{
    const newState =  JSON.parse(JSON.stringify(state))
    return newState
}

export default reducer