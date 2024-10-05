import React from "react";
import SDGCard from "../components/SDGCard";

const sdgs = [
    {
        title: "SDG 1: No Poverty",
        description: "Eradicate poverty in all its forms everywhere, ensuring that all people have access to basic needs like food, water, shelter, and healthcare..",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 2:  Zero Hunger",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 3: Good Health and Well-being",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 4: Quality Education",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 5: Gender Equality ",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 6:  Clean Water and Sanitation",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 7: Affordable and Clean Energy",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 8: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 9: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 10: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 11: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 12: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 13: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 14: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 15: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 16: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 17: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
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