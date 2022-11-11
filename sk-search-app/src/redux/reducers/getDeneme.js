import * as actionTypes from '../actions/actionTypes'
import denemeState from '../states/DenemeState'
export default function getDeneme(state=denemeState.DenemeData,action){
    switch (action.type) {
        case actionTypes.DENEME:
            return action.payload 
        default:
            return state

        }
}