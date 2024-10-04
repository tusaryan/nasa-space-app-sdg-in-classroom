import React from "react";
import SDGCard from "../components/SDGCard";

const sdgs = [
    {
        title: "SDG 13: Climate Action",
        description: "Take urgent action to combat climate change and its impacts.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 6: Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 4: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    }
];

const SDGsPage = () => {
    return (
        <div>
            <h2>Explore the Sustainable Development Goals (SDGs)</h2>
            <div className="sdgs-container">
                {sdgs.map((sdg, index) => (
                    <SDGCard key={index} sdg={sdg} />
                ))}
            </div>
        </div>
    );
}

export default SDGsPage;