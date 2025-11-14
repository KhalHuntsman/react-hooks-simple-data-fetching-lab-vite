import { useState, useEffect } from 'react';
import FetchButton from './FetchButton';
import "../App.css";
import DogDisplay from './DogDisplay'; // <-- You forgot this!

function App() {
  const [dog, setDog] = useState("Click here to see a dog!");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDog();
  }, []);

  function fetchDog() {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDog(data.message); // <-- FIXED
      })
      .catch(error => {
        console.error("error fetching:", error);
        setDog("Failed to fetch a dog picture");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="app">
      <h1>Doggos!</h1>
      <DogDisplay dog={dog} loading={loading} />
      <FetchButton fetchDog={fetchDog} />
    </div>
  );
}

export default App;
