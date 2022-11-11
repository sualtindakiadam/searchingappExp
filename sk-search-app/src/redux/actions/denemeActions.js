import * as actionTypes from "./actionTypes"


export function setDeneme(value){

    console.log("setDeneme ------------ ")
    console.log(value)
    return{
        type:actionTypes.DENEME,
        payload:value
    }

}
