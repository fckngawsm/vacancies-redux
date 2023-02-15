import { createStore , combineReducers} from "redux";
import { positionReducer } from "./reducers/reducers-positions";
export const store = createStore(combineReducers({
    positions: positionReducer,
}))