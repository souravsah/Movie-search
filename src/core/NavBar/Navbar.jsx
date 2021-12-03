import React, { useRef, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useHistory } from 'react-router';
import { Dots, List, Logo, Navbarstyle } from './Navbar.style';
const Navbar = () => {
    let history = useHistory();
    let [toggle,setToggle]=useState(false);
    const handletoggle = () =>{
        setToggle(!toggle)
    }
    const handleClick = () =>{
        history.push("/");
    }
    return (
        <div >
        <Navbarstyle >
            <Logo>
                <li onClick={handleClick}>Movies Information</li>
            </Logo>
            <List toggle={toggle}>
                <li>Movies</li>
                <li>Tv Shows</li>
                <li>People</li>
                <li>More</li>
            </List>
        </Navbarstyle>
            <Dots onClick={handletoggle} >
                <BiDotsVerticalRounded />
            </Dots>
        </div>
    )
}

export default Navbar
