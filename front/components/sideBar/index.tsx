import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSideOpen } from "../../redux/actions/actions";
import useWindowWidth from '../../helpers/useWindowsize';
import { SidebarWrapper } from './style';

export default function Sidebar() {
    const dispatch = useDispatch();
    const side = useSelector((state: any) => state.side);
    const width = useWindowWidth();
    return (
        <SidebarWrapper side={side}>
            this is sidebar
        </SidebarWrapper>
    )
}
