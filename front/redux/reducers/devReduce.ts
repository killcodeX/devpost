import { CHANGETHEME } from "../actions/actionConstant";

const initialState = {
  theme: false,
};

// Reducers
export const DevReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETHEME:
      return {
        ...state,
        theme: !state.theme,
      };

    default:
      return state;
  }
};
