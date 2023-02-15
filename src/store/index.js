import { createStore , combineReducers} from "redux";
import { positionReducer } from "./reducers/reducers-positions";
import {filterReducer} from '../store/reducers/reducers-filter'
export const store = createStore(combineReducers({
    positions: positionReducer,
    filter: filterReducer
}))