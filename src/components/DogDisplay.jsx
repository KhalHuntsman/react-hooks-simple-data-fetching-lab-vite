import React from 'react';

const DogDisplay = ({ dog, loading }) => {
  return (
    <div className="dog-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dog} alt="A Random Dog" />
      )}
    </div>
  );
}

export default DogDisplay;
