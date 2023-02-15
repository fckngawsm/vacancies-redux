import {
  ADD_FILTER,
  CLEAR_FILTER,
  REMOVE_FILTER,
} from "../constants/constants-filters";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if(state.includes(action.filter)){
        return state
      }
      return [...state, action.filter];
    }
    case REMOVE_FILTER: {
      return state.filter((filter) => filter !== action.filter);
    }
    case CLEAR_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
};
