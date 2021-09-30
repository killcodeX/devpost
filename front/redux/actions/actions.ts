import { CHANGETHEME, OPENSIDE, GETGLOBAL } from "./actionConstant";

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

export const getGlobal = (payload) =>{
  return {
    type: GETGLOBAL,
    payload: payload,
  }
}