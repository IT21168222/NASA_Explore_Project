import Mars_Main from "./components/Mars_Rover_Photography/Main";
import Wildfire_Main from "./components/Wildfire_Tracker/Main";
import Header from "./components/Header/Header";
import Render from "./components/Astronomy_Picture/Render";
import SignUp from "./components/User_Management/Authentication/SignUp";
import SignIn from "./components/User_Management/Authentication/SignIn";
import Home from "./components/Home/Home";

import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";

function App() {

  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };


  return (
    <>
      <Header user={user} onSignOut={handleSignOut} />
      {/* <Render/> */}
      {/* <Main/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Home/> */}

      <BrowserRouter>

        <Routes>

          <Route path='/' exact Component={Home}></Route>
          <Route path='/mars-rover' exact Component={Mars_Main}></Route>
          <Route path='/astronomy-picture' exact Component={Render}></Route>
          <Route path='/signUp' exact Component={SignUp}></Route>
          <Route path='/signIn' onSignIn={handleSignIn} exact Component={SignIn}></Route>
          <Route path='/wildfire-tracker' exact Component={Wildfire_Main}></Route>
        
        </Routes>


      </BrowserRouter>

     <Footer shouldDisplayFooter={!window.location.pathname.includes('/astronomy-picture')} />


    </>
  );
}

export default App