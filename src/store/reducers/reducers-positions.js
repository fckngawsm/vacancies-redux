import { ADD_POSTIONS } from "../constants/constants-positions";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSTIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
