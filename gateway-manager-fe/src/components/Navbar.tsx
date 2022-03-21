import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/gateways/new'>Add Gateway</NavLink>
                    <NavLink to='/devices/new'>Add Device</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/logout'>LogOut</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;