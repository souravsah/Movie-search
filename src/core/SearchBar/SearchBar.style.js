import styled from "styled-components"
export const Searchbarcss = styled.form`
    display: flex;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

& input{
    width: 80%;
    border: 0;
    outline:0;
    padding: 8px 5px;
    border-radius: 20px 0 0 20px;

}
& button{
    border: none;
    margin: 0;
    padding: 8px 5px;
    width: 85px;
    border-radius: 0 20px 20px 0;
    background-color: rgb(130, 194, 255);

}
`
