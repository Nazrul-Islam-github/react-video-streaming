import React from 'react'
import {Nav,Menu,Navul,Navitem,Logo,SearchDiv,UserImg} from './NavbarStyle';
import userimg from '../../Image/unnamed.jpg';
import ModalContext from '../../ModalContaxt/modalContext'
import {useContext,useEffect } from 'react';
const Navbar = ({toggle}) => {
    const context = useContext(ModalContext); 
    const {open,handleOpen} = context;
    useEffect(() => {
      console.log(open)
    }, [])
    return (
        <>
        <Nav>

            <Menu><svg onClick={()=>toggle()} xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 0 26 26" width="26px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></Menu>
            <Logo>iTube</Logo>
<SearchDiv>
    <input type="text" placeholder="Search" />
    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
</SearchDiv>

<Navul>
    {/* <Navitem>Login</Navitem>
    <Navitem onClick={()=>handleOpen()}>Signup</Navitem> */}
    <Navitem onClick={()=>handleOpen()}>Signout</Navitem>
</Navul>

<UserImg>
    {/* <img src={userimg} alt="userimage" /> */}
</UserImg>
        </Nav>

        </>
    )
}

export default Navbar
