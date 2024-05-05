import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <style>{styles}</style>
    <div className="home">
      <header>
        <h1>Welcome to NASA Explorer!</h1>
        <p>Explore the wonders of space with real-time data from NASA's APIs.</p>
        <img src="https://m.media-amazon.com/images/I/71dNtlbI7fL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="NASA Explorer Banner" />
      </header>
      <section className="section">
        <h2>Explore Mars Rovers</h2>
        <p>Discover the latest images and information from NASA's Mars rovers.</p>
        <Link to="/mars-rover">
          <img src="https://scitechdaily.com/images/SHERLOC-NASA-Perseverance-Mars-Rover-777x437.jpg" alt="Mars Rover Image" />
        </Link>
      </section>
      <section className="section">
        <h2>Astronomy Picture of the Day</h2>
        <p>Experience the universe through stunning imagery captured by NASA's telescopes.</p>
        <Link to="/astronomy-picture">
          <img src="https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2015%2F11%2Feso1403a1.jpg&w=1080&q=75" alt="Astronomy Picture" />
        </Link>
      </section>
      <section className="section">
        <h2>Wildfire Tracker</h2>
        <p>Stay informed about wildfires around the world with data from NASA satellites.</p>
        <Link to="/wildfire-tracker">
          <img src="https://www.politico.com/dims4/default/f4696a0/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F49%2F30%2F69e87ad546368fbd3a4020c30e25%2Fap21217249136497-1.jpg" alt="Wildfire Image" />
        </Link>
      </section>
      <footer>
        <p>Explore more with NASA Explorer!</p>
        <button onClick={scrollToTop} className="explore-button">Go to Top</button>
        <p>Created with ❤️ by Saranga</p>
      </footer>
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
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
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

export default Home;