import React from 'react';

// Button component that triggers a new joke fetch when clicked
const FetchButton = ({ fetchDog }) => {
  return (
    <button 
      className="fetch-button"
      onClick={fetchDog} // calls the fetch function from props
    >
      Fetch Boy!
    </button>
  );
}

export default FetchButton;
