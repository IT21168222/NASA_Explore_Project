import React from 'react';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
  return (
    <>
      <style>{styles}</style>
      <footer>
        <p>Explore more with NASA Explorer!</p>
        <button onClick={scrollToTop} className="explore-button">Go to Top</button>
        <p>Created with ❤️ by Saranga</p>
      </footer>
    </>
  );
}




const styles = `

footer {
    position: bottom;
    margin-top: 50px;
    background-color: #0e101b; /* Dark blue or black for a space-like feel */
    color: #ffffff; /* White text for contrast */
    padding: 20px; /* Add some padding for spacing */
    text-align: center; /* Center align text */
  }
  
  .explore-button {
    background-color: #ff9900; /* Bright orange for contrast */
    color: #ffffff; /* White text for contrast */
    border: none; /* Remove button border */
    padding: 10px 20px; /* Add padding for button size */
    font-size: 16px; /* Increase font size for visibility */
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  }
  
  .explore-button:hover {
    background-color: #ffcc66; /* Lighter orange on hover */
  }
  
  /* Style the text "Created with ❤️ by Saranga" */
  footer p:last-child {
    margin-top: 20px; /* Add margin to separate from button */
  }
  
  /* Add some space between paragraphs */
  footer p {
    margin: 10px 0;
  }
  
`

export default Footer;
