import styled from 'styled-components';

export const Box = styled.div`
    width: 170px;
    height: 300px;
    position: relative;
    margin: 15px;
    cursor: pointer;


`
export const ImgBox =styled.div`
width: 100%;
height: 240px;
margin-bottom: 1.2rem;
border-radius: 10px;
 
& img{
    width:170px;
    height: 240px;
    border-radius: 10px;

}

`
export const Informationbox =styled.div`
width: 100%;
& span{
    color: rgb(161, 159, 159);

}
`
export const Circle =styled.div`
    font-size: 0.8rem;
    width: 41px;
    height: 41px;
    border: 2px solid rgb(97, 97, 255);
    border-radius: 50%;
    background-color: #032541;
    position: absolute;
    top: 73%;
    left: 10%;
    padding: 12px 2px;

    & h4{
        color: white;
    }
`
