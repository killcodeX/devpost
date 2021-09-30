import React from "react";
import { CgFormatRight } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { getSideOpen } from "../../redux/actions/actions";
import useWindowWidth from "../../helpers/useWindowsize";
import { SidebarWrapper, SideHeader, SideBarTitle, IconWrapper } from "./style";

export default function Sidebar() {
  const dispatch = useDispatch();
  const side = useSelector((state: any) => state.side);
  const width = useWindowWidth();
  return (
    <SidebarWrapper side={side}>
      <SideHeader>
          <SideBarTitle>Side Bar</SideBarTitle>
        <IconWrapper onClick={() => dispatch(getSideOpen())}>
          <CgFormatRight />
        </IconWrapper>
      </SideHeader>
    </SidebarWrapper>
  );
}
