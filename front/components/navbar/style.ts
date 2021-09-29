import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position:relative;
  width: 100%;
  transition: all 0.5s ease;
  border-bottom: 1px solid #bac1ca;
  padding: 17px 20px;
  color: ${(props) => props.theme.headText};
  background: ${(props) => props.theme.head};
`;
