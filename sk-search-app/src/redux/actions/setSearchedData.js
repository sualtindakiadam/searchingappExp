import {SEARCHED_DATA} from "./actionTypes"


export function setSearchedData(value){
    return{
        type:SEARCHED_DATA,
        payload:value
    }

}
