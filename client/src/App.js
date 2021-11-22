import Navbar from "./components/Navbar";
import SideBar from "./components/siedbar";
import Video from "./components/Video";
import { useState, useEffect } from 'react';
import { Home } from './components/Home/HomeStyle'
import Signup from "./components/Signup";
import ModalState from "./ModalContaxt/ModalState";
import History from './components/History/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Player from "./components/Video/Player";
function App() {
  const [toggleSideNav, setToggleSideNav] = useState(true);
  const toggle = () => {
    setToggleSideNav(!toggleSideNav);
    console.log(toggleSideNav);
    // --------------Test Video Thubnail Get--------------------------
  }

  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth <= 450) {
      setToggleSideNav(false)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>

      <ModalState>

        <Router>
          <Navbar toggle={toggle} />
          <SideBar toggleSideNav={toggleSideNav} />
          <Signup />
          <Switch>

            <Route exact path="/">
              <Home width={window.innerWidth}>
                < Video />
              </Home>
            </Route>


            <Route exact path="/watch/:id">
              <Home width={window.innerWidth}>
                < Player />
              </Home>
            </Route>

            <Route exact path="/history">

              <Home width={window.innerWidth}>
                <History />
              </Home>
            </Route>



          </Switch>





        </Router>

      </ModalState>
    </>
  );
}

export default App;
