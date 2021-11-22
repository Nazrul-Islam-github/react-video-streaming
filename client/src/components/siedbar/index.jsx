import React from 'react'
import { Main,Logo } from './SideBarStyle.js';
import {Home,Music,Like,Later,History} from '../Icon/index';

import {Link} from "react-router-dom";
const SideBar = ({toggleSideNav}) => {
    return (
       <>
       <Main toggleSideNav={toggleSideNav}>

           <ul>
              <li> <Link to="/"><span><Home/> Home</span></Link></li>
               <li> <Link to="/music"><span><Music/>Music</span></Link> </li>
               <li><Link to="/likevideos"><span><Like/>Like Videos</span></Link></li>
               <li><Link to="/watchletter"><span><Later/>Watch Leter</span></Link></li>
               <li><Link to="/history"><span><History/>History</span></Link></li>
           </ul>
       </Main>
       
       </>
    )
}

export default SideBar
