import { ADD_POSTIONS } from "store/constants/constants-positions";

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
