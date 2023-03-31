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
export const Delete = styled.button`
height: 2.5rem;
background-color: ${theme.color2};
color: white;
font-family: 'Lato', sans-serif;
width: 100px;
cursor: pointer;
justify-content: center;
`

export const GoBack = styled.button`
height: 4rem;
background-color: ${theme.color2};
color: white;
font-family: 'Lato', sans-serif;
width: 175px;
margin: 10px;
cursor: pointer;
align-items: center;
justify-cotent: center;
font-size: 1.4rem;
`

export const DeleteContainer = styled.div`
display: flex;
justify-content: center;
`

export const GoBackContainer = styled.div`
display: flex;
justify-content: center;
`

