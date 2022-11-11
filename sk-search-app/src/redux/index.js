import {combineReducers} from 'redux'
import getDeneme from './reducers/getDeneme'
/*import getUserInfo from './reducers/user/getUserInfo';
import getChangeSizeSlide from './reducers/user/getChangeSizeSlide';
import getTalepData from './reducers/TalepNumarataj/getTalepData'
*/
const rootReducer = combineReducers({
    getDeneme
   /* getUserInfo,
    getChangeSizeSlide,
    getTalepData*/
})

export default rootReducer;