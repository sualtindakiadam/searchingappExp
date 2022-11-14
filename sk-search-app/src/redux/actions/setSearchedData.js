import {SEARCHED_DATA} from "./actionTypes"


export function setSearchedData(value){

    console.log("setSearchedData ------------ ")
    console.log(value)
    return{
        type:SEARCHED_DATA,
        payload:value
    }

}
