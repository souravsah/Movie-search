import styled from "styled-components";
import img from "../../../Images/trendingbackground.jpg"

export const Parent = styled.div`
    display: flex;
    margin: 15px;
    & h1{
        font-size: 1.2rem;
        margin: 0 10px;
        color: white;
        padding-top: 5px;
    }`
export const Trending1 =styled.div`
margin-top: -15px;
background: url(${img}) ;
background-position: center center;
background-repeat: no-repeat;
color: white;
`