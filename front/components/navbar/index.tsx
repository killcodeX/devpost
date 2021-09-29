import React from "react";
import { HeaderWrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getThemeChange } from "../../redux/actions/actions";

export default function Navbar({ categories }) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  return (
    <HeaderWrapper>
      <span onClick={() => dispatch(getThemeChange())}>{theme ? "☀️" : "🌙"}</span>
    </HeaderWrapper>
  );
}
