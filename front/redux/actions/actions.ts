import {
  CHANGETHEME,
  OPENSIDE,
  GETGLOBAL,
  GETCATEGORY,
} from "./actionConstant";

export const getThemeChange = () => {
  return {
    type: CHANGETHEME,
  };
};

export const getSideOpen = () => {
  return {
    type: OPENSIDE,
  };
};

export const getGlobal = (payload) => {
  return {
    type: GETGLOBAL,
    payload: payload,
  };
};

export const getCategory = (payload) => {
  return {
    type: GETCATEGORY,
    payload: payload,
  };
};
