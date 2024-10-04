import React from "react";

const SDGCard = ({ sdg }) => {
    return (
        <div className="sdg-card">
            <h2>{sdg.title}</h2>
            <p>{sdg.description}</p>
            {/* <img src={sdg.image} alt={sdg.title} /> */}
        </div>
    );
}

export default SDGCard;