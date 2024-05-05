import { useEffect, useState } from "react";

function useNASAData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPIData() {
      try {
        const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
        const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        setLoading(false); // Set loading to false after successful fetch
        console.log("Fetched from API:", apiData);
      } catch (err) {
        setLoading(false); // Set loading to false on error
        console.log(err.message);
      }
    }

    fetchAPIData();
  }, []);

  useEffect(() => {
    console.log("Data:", data);
  }, [data]);

  return { data, loading };
}

export default useNASAData;
