import { SEARCHED_DATA } from '../actions/actionTypes'
import searchedDataState from '../states/SearchedState'

export default function getSearchedData(state = searchedDataState.SearchedData, action) {
    switch (action.type) {
        case SEARCHED_DATA:
            return action.payload
        default:
            return state

    }
}