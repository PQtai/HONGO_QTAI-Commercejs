import  { createGlobalStyle} from "styled-components";
import styled , {keyframes} from 'styled-components'
const GlobalStyles = createGlobalStyle`
    body , html{
        margin : 0; 
        padding : 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        /* transition: 0.5s all ease-in-out; */
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root{
        --background-color: #D9EFF7;
        --background-btn : #77ACB7;
        --txt-color : #232323;
        --txt-primary-color : #808080;
    }
    ul , li {
        margin : 0;
        padding : 0;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .dFlex {
        display: flex;
        justify-content : space-between;
        align-items : center;
    }
    .button-styled {
        background-color : #FFFFFF;
        border : none;
        outline : none;
    }
`
export const ContainerStyle = styled.div`
    z-index: 1;
    overflow: hidden;
    max-width: 1300px;
    margin : auto;
    padding : 0 50px;
    @media (min-width: 740px) and (max-width: 1023px){
        padding-right: 30px;
        padding-left: 30px;
    }
    @media (max-width: 739px) {
        padding-right: 10px;
        padding-left: 10px;
    }
`

export const Button = styled.button`
    outline: none;
    border : none;
`





export const fadePourDown = keyframes`
    from{
        opacity: 0;
        transform: scale(0);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`

export default GlobalStyles;