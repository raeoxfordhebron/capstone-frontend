import styled from "styled-components";
import theme from "../json/theme.json"


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