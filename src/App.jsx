import './App.css'
import React, { useEffect, useState } from 'react';
import Listing from './components/Listing';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/ironhack-edu/7684927b33b83539d8806aaaa550235d/raw/5dfe2d2bf165f3e6fbbf3e8b574e774131763a8e/rentals.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <Listing listingData = {data} />
  );
};



export default App
