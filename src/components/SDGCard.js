// import React from 'react';
// import '../styles/SDGCard.css'; // Import the CSS file

// const SDGCard = ({ sdg }) => {
//   return (
//     <div className="sdg-card">
//       <img src={sdg.image} alt={sdg.title} style={{ width: '100%', height: 'auto' }} />
//       <h3>{sdg.title}</h3>
//     </div>
//   );
// };

// export default SDGCard;
import React, { useState } from "react";
import "../styles/SDGCard.css"; // Make sure to create and import the CSS file

const SDGCard = ({ title, description, image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`sdg-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
            <div className="sdg-card-inner">
                <div className="sdg-card-front">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                </div>
                <div className="sdg-card-back">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SDGCard;