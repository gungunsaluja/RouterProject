import React from 'react';
import logo from '../assets/Logo.svg'
;
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return (
        <div>
            <Link to = "/">
                <img src = {logo}>
                </img>
            </Link>

        </div>
        )
         
            
}
export default Navbar;