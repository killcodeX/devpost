import { CHANGETHEME, OPENSIDE, GETGLOBAL, GETCATEGORY } from "../actions/actionConstant";

const initialState = {
  theme: false,
  side: false,
  global: {},
  categories: [],
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
    case GETCATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
