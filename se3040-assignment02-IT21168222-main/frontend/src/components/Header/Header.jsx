import React, { useEffect } from 'react';


function Header() {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Retrieve user data from local storage
  //   const userData = localStorage.getItem("user");
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   }
  // }, []);
  useEffect(() => {
    // Create a link element
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';

    // Append the link element to the document head
    document.head.appendChild(link);

    // Clean up function to remove the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);


  return (
    <>
      <style>{styles}</style>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#32174d' }}>
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
        
        <div class="header">
          <div class="header-right">
            <a class="active" href="/SignUp">Sign Up</a>
            <a class="active" href="/SignIn">Sign In</a>
          </div>
        </div>
      </nav>
    </>
  );
}




const styles = `



.header {
  overflow: hidden;
  padding: 20px 10px;
  width :100%;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
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
