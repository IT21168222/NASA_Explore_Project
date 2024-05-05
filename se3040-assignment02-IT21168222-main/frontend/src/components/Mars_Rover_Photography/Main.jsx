import React, { useEffect, useState } from "react";

function Main() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 60;

  useEffect(() => {
    async function fetchPhotos() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPhotos();
  }, []);

  // Logic to get current photos based on currentPage
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Logic for page navigation
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <style>{styles}</style>
    <div className="container">


      <h1 className="mars text-center mt-5 mb-4">Mars Rover Photos</h1>


      {currentPhotos && currentPhotos.length > 0 ? (
        <div className="row">
          {currentPhotos.slice(-15).map(photo => (
            <div className="col-md-4 mb-4" key={photo.id}>
              <div className="card">
                <img src={photo.img_src} className="card-image" alt="Mars Rover Photo" />
                <div className="card-body">
                  <p className="card-text">Earth Date: {photo.earth_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Mars rover photos available.</p>
      )}





      <div className="pagination">
        {Array.from({ length: Math.ceil(photos.length / photosPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? "active" : ""}>{index + 1}</button>
        ))}
      </div>
    </div>
    </>
  );
}



const styles = `
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #e2e8f0;
  border: none;
  color: #4a5568;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: #cbd5e0;
}

.pagination button.active {
  background-color: #4a5568;
  color: #ffffff;
}  

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export default Main;