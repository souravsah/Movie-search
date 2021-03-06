export default (state,action) => {
    switch(action.type){
        case "GET_SEARCH_DATA":
            return {...state,["searchdata"]:action.payload}
        case "GET_DROPDOWN_DATA":
            return{...state,["dropdowndata"]:action.payload}
        default:
            return state;
        case "GET_SCROLL_DATA":
            return{...state,["scrolldata"]:action.payload}
    }
}