import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    height: '100vh',
    width: '100%'
};

const tailwindStyles = `
<script src="https://cdn.tailwindcss.com"></script>
  `;

const Map = ({ eventData }) => {

    const API_KEY = import.meta.env.GOOGLE_API_KEY
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    });


    let fireIcon = {
        url: 'https://en.tipas.net/wp-content/uploads/2023/05/5243645_burn_fire_flame_hot_icon.png', // Replace with the URL to your custom fire icon SVG
    };

    // Check if window.google.maps is defined before accessing it
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
        fireIcon.scaledSize = new window.google.maps.Size(40, 40); // Adjust the size of the icon
    }

    return isLoaded ? (
        <>
            <style>{styles}</style>
            <div>
                <style>{tailwindStyles}</style>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={4}
                    center={{ lat: 0, lng: 0 }}
                >
                    {eventData.filter(
                        (event) => event.categories[0].id === 8 && Array.isArray(event.geometries[0].coordinates) && event.geometries[0].coordinates.length === 2
                    ).map((event, index) => (
                        event.geometries && (
                            <Marker
                                key={index}
                                position={{ lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0] }}
                                icon={fireIcon} // fire icon as marker icon
                            />
                        )
                    ))}
                </GoogleMap>
            </div>
        </>
    ) : <></>;

};



const styles = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  } 
  
body {
    background-color: #f2f2f2;
    overflow-x: hidden;
  }
  
  .header-bar {
    width: 100vw;
    background-color: firebrick;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
  }
  
  /*Position Relative is important for location-info*/
  .map-container {
    position: relative;
    width: 100vw;
    height: 600px;
  }
  
  .location-icon {
    font-size: 2rem;
    position: relative;
  }
  
  .loader-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #e6e6e6;
    border-top-color: #808080;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .cluster-marker {
    color: #fff;
    background: firebrick;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .location-info {
    position: absolute;
    top: 40px;
    right: 50px;
    width: 400px;
    min-height: 200px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
  }
  
  .location-info ul {
    list-style: none;
    padding: 0;
  }
  
  .location-info li {
    padding: 5px 0;
  }
  
  /* Search Styling */
  .search-container {
    margin: 10px 0 20px 0;
    display: flex;
    justify-content: center;
  }
  
  .search-container > * {
    display: inline-block;
  }
  
  .search-container p {
    margin: 0 20px 0 20px;
    font-size: 40px;
  }
  
  /*Font Styling for browser compatibility*/
  
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
  
  .search-container input[type="text"] {
    font-family: inherit;
    outline: none;
    width: 100%;
    max-width: 500px;
    margin: 8px 20px 0 0;
    padding: 0 0 0 10px;
  }
  
  .search-table {
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
    max-width: 1000px;
    text-align: left;
  }
  
  .search-table th {
    background-color: firebrick;
    color: white;
  }
  
  .search-table tr:nth-child(even) {
    background-color: #cccccc;
  }
  
  .search-table th,
  td {
    padding: 10px;
  }
  
  .option-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .option-container p {
    margin-right: 10px;
  }
  

  .containerStyle {
    height: '100vh';
    width: '100%';
  }
`


export default React.memo(Map);