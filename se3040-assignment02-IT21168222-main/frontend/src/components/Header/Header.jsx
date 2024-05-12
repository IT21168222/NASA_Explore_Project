import React, { useEffect, useState } from 'react';


function Header({ onSignOut }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  const handleSignOut = () => {
    onSignOut();
    window.location.reload(true);
  };


  return (
    <>
      <style>{styles}</style>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="./src/assets/logo1.png" height="75" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/astronomy-picture"> Picture of the Day <span className="bi bi-camera2"></span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/mars-rover"> Mars Photography<i className="bi bi-rocket-takeoff-fill"></i></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/wildfire-tracker"> Wildfire Tracker<span className="bi bi-stars"></span></a>
              </li>

            </ul>
          </div>
        </div>

        <div className="header">
          <div className="header-right">
            {user ? (
              <>
                <span className="welcome-msg">Welcome, {user.email}!</span>
                <button className="btnStyle" onClick={handleSignOut} >Sign Out</button>
              </>
            ) : (
              <>
                <a className="active" href="/SignUp">Sign Up</a>
                <a className="active" href="/SignIn"> Sign In </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}




const styles = `

.navbar-nav .nav-item .nav-link:hover {
  background-color: none;
  color: lightblue !important;
}

/* Style for the welcome message */
.welcome-msg {
  color: white;
  margin-right: 20px; /* Add some space between the welcome message and the sign out link */
}

/* Style for the sign out link */
.header-right a.active {
  margin-left: 20px; /* Add some space between the welcome message and the sign out link */
}

.nav-bg {
  background-color: #0e101b;
}

.header {
  overflow: hidden;
  padding: 20px 10px;
  width :100%;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 5px 12px;
  margin-left: 20px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  background: radial-gradient(56.39% 208.65% at 50% 50%, rgb(30, 144, 255) 0%, rgb(18, 119, 217) 100%);
  box-shadow: rgba(3, 3, 3, 0.24) 0px 2px 12px 0px, rgb(30, 144, 255) 0px 1px 1px 0px inset;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: blue;
  color: blue !important;
}
.btnStyle{
  background-color: dodgerblue;
  color: black;
  padding: 5px;
  border-radius:5px;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
  margin-right: 20px;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}

/*default***************************/
html{
    font-family: 'Roboto';
    
}


.btn{
    border: none;

}


/*nav bar*/
.nav-link{
    color: #fff;
}


/*h1 mar pic and home*/
.display-4, .pic, .mars{
    font-family: 'Orbitron';
    color: #69359c;
}

.text-center{
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 30px;
}

.card{
    margin: auto;
    height: 100%;
    border: none;
    margin-bottom: 20px;
}


.close {
    color: #fff;
    outline: none;
    background: none;
    
}


.card-body{
    
    background-color: #000000e3;
    color: #ffffff;
}

@media (min-width: 992px) and (max-width: 1399px){
    .marsWeather{
        height:590px;
    }
}

@media (min-width: 768px) and (max-width: 991px){
    .marsWeather{
        height:540px;
    }
}

@media (min-width: 576px) and (max-width: 767px){
    .marsWeather{
        height:510px;
    }
}

@media (max-width: 576px){
    .marsWeather{
        height:504px;
    }
}
`

export default Header;
