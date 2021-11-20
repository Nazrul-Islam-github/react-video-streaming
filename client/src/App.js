import Navbar from "./components/Navbar";
import SideBar from "./components/siedbar";
import Video from "./components/Video";
import { useState, useEffect } from 'react';
import { Home } from './components/Home/HomeStyle'
import Signup from "./components/Signup";
import ModalState from "./ModalContaxt/ModalState";
function App() {
  const [toggleSideNav, setToggleSideNav] = useState(true);
  const toggle = () => {
    setToggleSideNav(!toggleSideNav);
    console.log(toggleSideNav)
  }
  return (
    <>

      <ModalState>

        <Navbar toggle={toggle} />
        <SideBar toggleSideNav={toggleSideNav} />
        <Home>
          < Video />
          <Signup />
        </Home>


      </ModalState>
    </>
  );
}

export default App;
