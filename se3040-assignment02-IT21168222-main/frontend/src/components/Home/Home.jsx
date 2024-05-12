import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://www.abc.net.au/reslib/201008/r621849_4180250.jpg',
    'https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2015%2F11%2Feso1403a1.jpg&w=1080&q=75',
    'https://media.npr.org/assets/img/2018/01/03/heic1402a-3869928c45484c28650d419a2204090b49f3da9e.jpg?s=1100&c=15&f=jpeg',
  ];

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <style>{styles}</style>
    
      <header>
        <h1>Welcome to NASA Explorer!</h1>
        <p>Explore the wonders of space with real-time data from NASA's APIs.</p>
      </header>
      <br/>
      <center><h2 style={{ color: 'white', opacity: '50%' }}>Explorer More!</h2></center>
      <div className="home">
      <section className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            />
          ))}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </section>
        <section className="section">
          <h2>Explore Mars Rovers</h2>
          <p>Discover the latest images and information from NASA's Mars rovers.</p>
          {isAuthenticated ? (
            <Link to="/mars-rover">
              <img src="https://scitechdaily.com/images/SHERLOC-NASA-Perseverance-Mars-Rover-777x437.jpg" alt="Mars Rover Image" />
            </Link>
          ) : (
            <img src="https://scitechdaily.com/images/SHERLOC-NASA-Perseverance-Mars-Rover-777x437.jpg" alt="Mars Rover Image" />
          )}
        </section>
        <section className="section">
          <h2>Astronomy Picture of the Day</h2>
          <p>Experience the universe through stunning imagery captured by NASA's telescopes.</p>
          {isAuthenticated ? (
            <Link to="/astronomy-picture">
              <img src="https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2015%2F11%2Feso1403a1.jpg&w=1080&q=75" alt="Astronomy Picture" />
            </Link>
          ) : (
            <img src="https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2015%2F11%2Feso1403a1.jpg&w=1080&q=75" alt="Astronomy Picture" />
          )}
        </section>
        <section className="section">
          <h2>Wildfire Tracker</h2>
          <p>Stay informed about wildfires around the world with data from NASA satellites.</p>
          {isAuthenticated ? (
            <Link to="/wildfire-tracker">
              <img src="https://www.politico.com/dims4/default/f4696a0/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F49%2F30%2F69e87ad546368fbd3a4020c30e25%2Fap21217249136497-1.jpg" alt="Wildfire Image" />
            </Link>
          ) : (
            <img src="https://www.politico.com/dims4/default/f4696a0/2147483647/strip/true/crop/1160x773+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F49%2F30%2F69e87ad546368fbd3a4020c30e25%2Fap21217249136497-1.jpg" alt="Wildfire Image" />
          )}
        </section>
      </div>
    </>
  );
}



const styles = `

.slideshow {
  position: relative;
  max-width: 60%;
  margin: 0 auto;
  overflow: hidden;
}

.slideshow img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.slideshow img:first-child {
  transform: translateX(0%);
}

.home {
  min-height: 100vh; 
  min-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
}

header {
  margin-top: 2px;
  padding-top: 70px;
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
  margin-bottom: 80px;

}

.section img {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  border-radius: 10px; /* Add border radius for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow for depth */
  transition: transform 0.3s ease; /* Add smooth transition effect */
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
  max-width: 900px;
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




.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  font-size: 18px;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 100;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

`

export default Home;