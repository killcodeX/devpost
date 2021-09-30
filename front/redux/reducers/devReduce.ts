import { CHANGETHEME, OPENSIDE, GETGLOBAL } from "../actions/actionConstant";

const initialState = {
  theme: false,
  side: false,
  global: {},
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
    case GETGLOBAL:
      return {
        ...state,
        global: action.payload,
      };
    default:
      return state;
  }
};
