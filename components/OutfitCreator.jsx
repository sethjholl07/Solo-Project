import React, { useState } from "react";

const OutfitCreator = ({ incrementCounter }) => {
  const [buttonState, setButtonState] = useState(true);

  const showButton = () => {
    setButtonState(false);
    incrementCounter();
  };

  return (
    <div>
      {buttonState && (
        <button className="outfit" onClick={showButton}>
          CREATE OUTFIT
        </button>
      )}
    </div>
  );
};

export default OutfitCreator;
