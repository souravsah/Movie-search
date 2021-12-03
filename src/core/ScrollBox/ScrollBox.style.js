import styled from 'styled-components'
export const Scroll = styled.div`

    display: flex;
    background-color: white;
    height: 30px;
    width: 400px;
    border-radius: 20px;
    border:#032541 2px solid ;
    cursor: pointer;

& div:nth-child(1){
    background-color: ${({togglestreaming})=>{
          return  togglestreaming?"#032541":"white"
    }} ;

    width: 25%;
    color:${({togglestreaming})=>{
          return  togglestreaming?"white":"black"
    }} ;
    padding: 2px 5px;
    border-radius: 20px;
    transition: 1s;

}
& div:nth-child(2){
    background-color: ${({toggleTv})=>{
          return  toggleTv?"#032541":"white"
    }} ;

    color:${({toggleTv})=>{
          return  toggleTv?"white":"black"
    }} ;
    padding: 4px 15px;

    width: 25%;
    border-radius: 20px;
    transition: 1s;

}
& div:nth-child(3){
    background-color: ${({toggleRent})=>{
          return  toggleRent?"#032541":"white"
    }} ;
    color:${({toggleRent})=>{
          return  toggleRent?"white":"black"
    }} ;

    width: 25%;
    padding: 4px 15px;
    transition: 1s;

    border-radius: 20px;
}
& div:nth-child(4){
    background-color: ${({toggleTheaters})=>{
          return  toggleTheaters?"#032541":"white"
    }} ;
    color:${({toggleTheaters})=>{
          return  toggleTheaters?"white":"black"
    }} ;
    /* padding: 0px 1px; */
    padding: 2px 4px;
    width: 25%;
    border-radius: 20px;
    transition: 1s;
}
@media(max-width:600px){
    
        flex-direction: column;
        width: 120px;
    
    & div:nth-child(1){
        width: 100%;
        height: 30px;
        padding: 5px 5px;
    }
    & div:nth-child(2){
        width: 100%;
        height: 30px;
        padding: 5px 5px;
        display: none;
    }
    & div:nth-child(3){
        width: 100%;
        /* padding: 0; */
        height: 30px;
        padding: 5px 5px;
        display: none;

    }
    & div:nth-child(4){
        width: 100%;
        height: 30px;
        padding: 5px 5px;
        display: none;

    }

}
` 
