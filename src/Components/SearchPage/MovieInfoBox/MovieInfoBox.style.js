import styled from "styled-components";

export const MovieinfoBoxcss = styled.div`
display: flex;
width: 100%;
border: 1px solid #ccc;
border-radius: 10px;
margin: 20px 0;
@media(max-width:600px){
    width:100%
}
`
export const MovieInfoImg = styled.div`
width: 120px;
height: 150px;
 img{
    width: 100px;
height: 150px;
border-radius: 10px 0 0 10px;

 }

`
export const Information =styled.div`
padding: 10px;
h4{
    margin: 10px 0;
    color: #ccc;
}

`