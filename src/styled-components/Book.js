import styled from "styled-components";
import theme from "../json/theme.json"

export const BookContainer = styled.div`
background-color: ${theme.color1};
width: 50%;
padding: 30px;
margin: 50px auto;
color: white;
border-radius: 2px;
`

export const BookTitle = styled.h1`
text-align: center;
background-color: ${theme.color2};
padding: 10px;
`
export const Genre = styled.div`
text-align: center;
`