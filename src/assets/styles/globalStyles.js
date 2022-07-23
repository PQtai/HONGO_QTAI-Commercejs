import  { createGlobalStyle} from "styled-components";
import styled , {keyframes} from 'styled-components'
const GlobalStyles = createGlobalStyle`
    body , html{
        margin : 0; 
        padding : 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
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
        --background-color : #1e1e1e;
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
    input {
        border : none;
        outline : none;
    }
    .active{
        displauy : block !important;
    }
    .hide{
        display: none !important;
    }
    .btn-close{
        position: absolute;
        top: 10px;
        background-color: transparent;
        right: 10px;
    }
    .disable{
        opacity : 0.6;
        preventDefault: true !important;
        pointer-events: none;
        cursor :  not-allowed !important;
        -webkit-touch-callout: none;/* iOS Safari */
        -webkit-user-select: none;  /* Safari */
        -khtml-user-select: none;   /* Konqueror HTML */
        -moz-user-select: none;     /* Old versions of Firefox */
            -ms-user-select: none;  /* Internet Explorer/Edge */
                user-select: none;  /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
    .is-option-me{
        border : 1px solid orange !important;
        color : orange;
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

export const Cursor = styled.div`
    flex: 1;
    cursor : ${props =>
        props.disabled?'not-allowed':'pointer'
    }
`

export const Button = styled.button`
    outline: none;
    border : none;
    cursor: pointer;
`
export const Img = styled.img`
    width : 100%;
    height : 100%;
`
const handleOptionColor = (props)=>{
    switch (props.color.toLowerCase()) {
        case 'đen':
            return '#111';
        case 'nâu':
            return 'rgb(88, 88, 88)';
        case 'trắng':
            return '#FFFFFF';
        case 'xám':
            return '#ccc';
        case 'xanh': 
            return '#207d6a';
        case 'xanh nhạt':
            return 'rgb(188, 251, 125)';
        case 'xanh dương':
            return '#5DADE2';
        case 'xanh lục':
            return '#52BE80';
        case 'đỏ':
            return '#C0392B';
        default:
            return '#FFFFFF'
    }
}
export const ItemOption = styled.li`
    background-color : ${handleOptionColor};
    margin : 6px;
    width : 40px;
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