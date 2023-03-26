import styled from "styled-components";
import theme from "../json/theme.json"

export const HeaderContainer = styled.div`
margin: 0 auto;
background-color: ${theme.color4};
text-align: center;
padding: 15px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
max-width: 1200px;
color: ${theme.color1};
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
`

export const NavLink = styled.a`
text-decoration: none;
color: white;
background-color: ${theme.color2};
padding: 10px;
width: 100px;
border-radius: 1px;
box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
cursor: pointer;
&:visited {
    text-decoration: none;
}
`

export const ButtonContainer = styled.button`
display: flex;
align-items: center;
color: white;
font-family: inherit;
font-size: 1rem;
background-color: ${theme.color2};
width: 100px;
cursor: pointer;
text-align: center;
`

export const SubMenuContainer = styled.div`
display: flex;
flex-wrap: wrap;
`