import styled from "styled-components";
import img from '../../../Images/header.jpeg'
export const Parent = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    background: url(${img}) ;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    div{
        position: absolute;
        top: 57%;
        left: 11%;
    }
`
