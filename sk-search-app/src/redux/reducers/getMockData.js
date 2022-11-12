import { MOCK_DATA } from "../actions/actionTypes";
import mockDataState from "../states/MockDataState";

export default function getMockData(state = mockDataState.MockData, action) {
    switch (action.type) {
        case MOCK_DATA:
            return action.payload
        default:
            return state
    }
}