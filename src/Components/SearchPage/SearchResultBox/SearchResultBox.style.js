import styled from "styled-components";

export const SearchResultBoxCss = styled.div`
width: 250px;
border: 1px solid #ccc;
border-radius: 10px;
margin: 15px;
h3{
    width: 100%;
    padding: 15px;
    background-color: #3DB5E4;
    border-radius: 10px 10px 0 0;
    letter-spacing: 0.1;
    color: white;
}
@media(max-width:600px){
    width: 100vw;
    margin: 0;
    border-radius: 0;
}
h3{
    border-radius: 0;
}
`
export const SettingBox =styled.div`
ul li{
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
}
ul li span{
display: block;
}
ul li:hover{
    background-color: #ccc;
    cursor: pointer;
}
@media(max-width:600px){
    ul {
        display: flex;
        overflow-x: scroll;
    }
    ul li{
        display: flex;
        flex-direction: column;
    }
}
`