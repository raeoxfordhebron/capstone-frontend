import styled from "styled-components";
import theme from "../json/theme.json"


export const DropdownContainer = styled.ul`
position: absolute;
right: 0;
left: auto;
list-style: none;
padding: 0.5rem 0;
border-radius: 0.5rem;
`



export const NavLink = styled.a`
display: block;
font-size: inherit;
color: white;
text-decoration: none;
cursor: pointer;
background-color: ${theme.color2};
padding: 10px;
`