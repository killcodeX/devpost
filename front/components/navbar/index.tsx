import React from "react";
import Link from "next/link";
import {
  HeaderWrapper,
  HeadContainer,
  LogoWrapper,
  LogoTitle,
  LogoSubtitle,
  RightContainer,
  CategoriesWrapper,
  CategoryItem,
  ThemeWrapper,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getThemeChange } from "../../redux/actions/actions";
import useWindowWidth from "../../helpers/useWindowsize";

export default function Navbar({ categories }) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const width = useWindowWidth();

  console.log("current width -->", width);

  return (
    <HeaderWrapper>
      <HeadContainer className="container">
        <Link href="/">
          <LogoWrapper>
            <LogoTitle>Dev</LogoTitle>
            <LogoSubtitle>Post</LogoSubtitle>
          </LogoWrapper>
        </Link>
        <RightContainer>
          {width > 480 ? (
            <CategoriesWrapper>
              {categories.map((item, index) => {
                return <CategoryItem key={index}>{item}</CategoryItem>;
              })}
            </CategoriesWrapper>
          ) : null}
          <ThemeWrapper onClick={() => dispatch(getThemeChange())}>
            {theme ? "☀️" : "🌙"}
          </ThemeWrapper>
        </RightContainer>
      </HeadContainer>
    </HeaderWrapper>
  );
}
