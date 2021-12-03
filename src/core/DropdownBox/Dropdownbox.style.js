import styled from "styled-components";
export const Dropdownboxcss = styled.ul`
width:63vw;
background-color: white;
z-index: 1;
li{
    list-style: none;
    padding: 8px;
    border: 1px solid #ccc;
    z-index: 1;
}
li:hover{
    background-color: #ccc;
    cursor: pointer;
}
@media(max-width:600px){
    width: 58vw;
}
`