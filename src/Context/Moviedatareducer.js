export default (state,action) => {
    switch(action.type){
        case "GET_SEARCH_DATA":
            return {...state,["searchdata"]:action.payload}
        default:
            return state;
    }
}