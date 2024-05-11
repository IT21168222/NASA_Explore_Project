import React from 'react';

function headerHome() {

  return (
    <>
    <style>{styles}</style>
    <div className="home">
      <header>
        <h1>Welcome to NASA Explorer!</h1>
        <p>Explore the wonders of space with real-time data from NASA's APIs.</p>
      </header>
    </div>
    </>
  );
}



const styles = `
.home {
  min-height: 100vh; 
  min-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
}

header {
  padding-top: 50px;
  text-align: center;
  height:40vh;
  color:white;
  background-image: url('https://www.astronomy.com/wp-content/uploads/sites/2/2021/09/Outlooknbehqb2r-1.png');
  background-repeat: false;
  padding-left: -50px;
  padding-right: -50px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: white;
}

.header p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.section {
  margin-top: 40px;
}

.section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: white;
}

.section p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.section img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.footer {
  margin-top: 40px;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  background-color: #666;
}

.footer p {
  font-size: 2rem;
  color: #666;
  margin-bottom: 10px;
}

.footer .explore-button {
  margin-top: 20px;
}

.explore-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.explore-button:hover {
  background-color: #0056b3;
}
`

export default headerHome;