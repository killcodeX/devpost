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
  HamWrapper,
  HamIcon
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getThemeChange, getSideOpen } from "../../redux/actions/actions";
import useWindowWidth from "../../helpers/useWindowsize";

export default function Navbar({ categories }) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const width = useWindowWidth();

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
          {width > 680 ? (
            <CategoriesWrapper>
              {categories.map((item, index) => {
                return <CategoryItem key={index}>{item}</CategoryItem>;
              })}
            </CategoriesWrapper>
          ) : null}
          <ThemeWrapper onClick={() => dispatch(getThemeChange())}>
            {theme ? "☀️" : "🌙"}
          </ThemeWrapper>
          {
            width > 480? null : (
              <HamWrapper onClick={() => dispatch(getSideOpen())}>
                <HamIcon src='/ham.svg' alt='ham' />
              </HamWrapper>
            )
          }
        </RightContainer>
      </HeadContainer>
    </HeaderWrapper>
  );
}
