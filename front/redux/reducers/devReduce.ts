import { CHANGETHEME, OPENSIDE } from "../actions/actionConstant";

const initialState = {
  theme: false,
  side: false,
};

// Reducers
export const DevReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETHEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case OPENSIDE:
      return {
        ...state,
        side: !state.side,
      };
    default:
      return state;
  }
};
