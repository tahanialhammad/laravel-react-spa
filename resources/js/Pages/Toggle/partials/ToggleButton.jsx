import React, { useState } from 'react';

export default function ToggleButton() {
  // State to track whether the div is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the div
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Button to toggle visibility */}
      <button onClick={toggleVisibility} className="p-4 bg-red-400">
        {isVisible ? 'Hide Div' : 'Show Div'}
      </button>

      <button onClick={() => setIsVisible(previousState => !previousState)}>
        Or thus  {isVisible ? 'Hide Div' : 'Show Div'} btn
      </button>
      {/* The div to be shown/hidden */}
      {isVisible && <div>This is the div that can be shown or hidden</div>}
    </div>
  );
}
