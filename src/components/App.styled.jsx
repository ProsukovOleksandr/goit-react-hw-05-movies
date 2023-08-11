import styled from "styled-components";
import {NavLink} from "react-router-dom";
export const StyledLink = styled(NavLink)`
  color: black;
  margin-left:5px;
  display:inline-block;
  text-decoration: none;
  height:20px;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;
export const StyledHeader = styled.header`
  height:40px;
  width:100%;
  border-bottom:1px solid #111111;
  padding-top:15px;
  padding-left:20px;
`;
export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;
` 