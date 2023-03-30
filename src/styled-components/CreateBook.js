import styled from "styled-components";
import theme from "../json/theme.json"

export const CreateBookContainer = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

export const CreateInput = styled.input`
height: 2.5rem;
margin: 10px;
text-align: center;
`

export const SubmitButton = styled.button`
height: 2.5rem;
background-color: ${theme.color2};
color: white;
font-family: 'Lato', sans-serif;
width: 100px;
margin: 10px;
cursor: pointer;
`