import { CHANGETHEME, OPENSIDE } from "./actionConstant";

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
