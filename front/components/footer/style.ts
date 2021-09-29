import styled from "styled-components";

export const FooterWrapper = styled.div`
  transition: all 0.5s ease;
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.secondary};
`;

export const UpperFooter = styled.div`
  padding: 40px 0;
`;

export const LogoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-items: flex-start;
  font-family: "Mulish", sans-serif !important;
  font-size: 34px !important;
  line-height: 1 !important;
  text-transform: uppercase !important;
`;

export const LogoTitle = styled.span`
  display: block;
  font-weight: 800 !important;
`;

export const LogoSubtitle = styled.span`
  margin-top: 0;
  margin-left: -4px;
  display: block;
  font-weight: 400 !important;
`;

export const FooterSectionTitle = styled.h2`
  color: ${(props) => props.theme.text.primary};S
  font-size: 26px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 26px;
  line-height: 26px;
  padding: 0;
  letter-spacing: -0.6px;
  text-align: left;
`;

export const FooterDescription = styled.span`
  font-size: 14px !important;
  line-height: 1.5 !important;
  font-weight: 300 !important;
`;

export const BottomFooter = styled.div`
  width: 100%;
  transition: all 0.5s ease;
  border-top: 1px solid #bac1ca;
  padding: 17px 20px;
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.primary};
`;
