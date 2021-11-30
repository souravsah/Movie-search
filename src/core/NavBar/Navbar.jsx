import React, { useRef, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Dots, List, Logo, Navbarstyle } from './Navbar.style';
const Navbar = () => {
    let [toggle,setToggle]=useState(false);
    const handletoggle = () =>{
        setToggle(!toggle)
    }
    return (
        <div >
        <Navbarstyle >
            <Logo>
                <li>Movies Information</li>
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
