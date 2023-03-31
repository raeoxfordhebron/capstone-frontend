import styled from "styled-components";
import theme from "../json/theme.json"

export const AuthorContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 80px;
justify-content: center;
`

export const Author = styled.div`
flex: 0 1 24%;
margin: 10px;
background-color: ${theme.color1};
padding: 30px;
border-radius: 2px;
`

export const Title = styled.h1`
margin: 20px auto;
text-align: center;
border-radius: 2px;
`

export const Name = styled.h1`
background-color: ${theme.color2};
color: white;
padding: 10px;
border-radius: 1px;
margin: 9px;
text-align: center;
`

export const Pic = styled.img`
margin: auto;
text-align: center;
object-fit: contain;
width: 80%;
height: 100%;
`

export const PicContainer = styled.div`
display: flex;
justify-content: center;
`

