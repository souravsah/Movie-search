import styled from "styled-components";

export const Navbarstyle = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: #032541;
    color: white;
    padding: 0 10px;
    @media(max-width:600px){
        display: flex;
        flex-direction: column;
        padding: 0;

    }
`;
export const Logo = styled.ul`
    padding: 0;
    display: flex;
    list-style: none;
    text-align: center;
    margin: 15px 5px;
    @media(max-width:600px){
        height:50px ;
        margin: 15px 0px;

    }
`
export const List = styled.ul`
    padding: 0;
    display: flex;
    list-style: none;

    & li {
        margin: 10px 5px;
    padding: 6px 12px;
    background-color: #19364F;
    cursor: pointer;
    }
    & li:hover{
    cursor: pointer;
    background-color: skyblue;
    }
    & li:active{
        background-color: silver;

    }
    @media(max-width:600px){
        display: flex;
        display: ${({toggle})=>{
             return toggle?"block":"none"  
        }};
        flex-direction: column;
        margin-left: -10px;
        z-index: 1;
        animation-name: list;
        animation-duration: 5s;

        @keyframes list {
            from{
                height: 0;
            }
            to {
                height: 100%;
            }
        }

        & li{
            margin: 0;
        padding: 6px 12px;
        border-top: 2px solid rgb(219, 209, 209);

        }
        & li:hover{
            transform: scale(1);

        }
    }
    
`
export const Dots = styled.div`
display: none;

@media(max-width:600px){
display: block;
position: absolute;
top: 6px;
right: 3px;
font-size: 20px;
color: white;
}
`

