import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const StyledListItem = styled.li`
    list-style: none;
    display:flex;
`
export const StyledLink = styled(Link)`
    text-decoration:none;
    color: #111111;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
    &:hover{
    color: #e5990c;
    }
`