import { MOCK_DATA } from "./actionTypes" 
//import * as actionTypes from './actionTypes' böyle dosyanın hepsini de çekebiliriz iki türlü de kullanılıyor. 
//Böyle çekersek "type: actionTypes.MOCK_DATA" şeklinde çağırmalıyız
export function setMockData(value){
    console.log("-------setMockData-------")
    console.log(value)
    return{
        type:MOCK_DATA,
        payload:value
    }
}