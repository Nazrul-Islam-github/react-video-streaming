import React from 'react'
import { Main,Logo } from './SideBarStyle.js';
import {Home,Music,Like,Later,History} from '../Icon/index'
const SideBar = ({toggleSideNav}) => {
    return (
       <>
       <Main toggleSideNav={toggleSideNav}>

           <ul>
              <li><span><Home/> Home</span></li>
               <li><span><Music/>Music</span></li>
               <li><span><Like/>Like Videos</span></li>
               <li><span><Later/>Watch Leter</span></li>
               <li><span><History/>History</span></li>
           </ul>
       </Main>
       
       </>
    )
}

export default SideBar
