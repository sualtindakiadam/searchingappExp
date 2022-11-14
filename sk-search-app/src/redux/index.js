import { combineReducers } from 'redux'
import getMockData from './reducers/getMockData';
import getSearchedData from './reducers/getSearchedData';
const rootReducer = combineReducers({ 
    getMockData,
    getSearchedData
})

export default rootReducer;